import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import { createClient } from "@/utils/supabase/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

const saveOrder = async (data, customerEmail) => {
  const supabase = createClient();

  try {
    const dbResult = await supabase
      .from("orders")
      .insert({
        email: customerEmail,
        description: data[0].description,
        amount_subtotal: data[0].amount_subtotal,
        amount_discount: data[0].amount_discount,
        amount_tax: data[0].amount_tax,
        amount_total: data[0].amount_total,
        stripe_order_id: data[0].id,
        currency: data[0].currency,
      })
      .select()
      .single();
    console.log(dbResult);
    return dbResult;
  } catch (error) {
    console.log(error);
  }
};

const handleGrantAccess = async (customerEmail) => {
  try {
    const supabase = createClient();
    const dbResult = await supabase
      .from("users")
      .update({ access_granted: true })
      .eq("email", customerEmail);

    if (!dbResult) {
      console.error("No user found");
    }

    console.log(dbResult);
    return dbResult;
  } catch (error) {
    console.log(error);
  }
};

const handleCompletedCheckoutSession = async (event) => {
  try {
    // payment is successful, grant access to the product
    const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
      event.data.object.id,
      {
        expand: ["line_items"],
      }
    );
    const line_items = sessionWithLineItems.line_items;
    const customerEmail = event.data.object.customer_details.email;

    if (!line_items) return false;

    const ordersFulfilled = await saveOrder(line_items.data, customerEmail);
    console.log("ordersFulfilled " + JSON.stringify(ordersFulfilled));

    const accessGranted = await handleGrantAccess(customerEmail);

    if (ordersFulfilled && accessGranted) return true;

    console.error(
      "error fulfilling orders for ",
      JSON.stringify(line_items),
      JSON.stringify(event.data.object)
    );

    return false;
  } catch (error) {
    console.log(error);
  }
};

export async function POST(req) {
  const body = await req.text();
  const signature = headers().get("stripe-signature");

  console.log("Webhook called.");

  let data;
  let eventType;
  let event;

  // verify Stripe event is legit
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error(`Webhook signature verification failed. ${err.message}`);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  data = event.data;
  eventType = event.type;

  try {
    switch (eventType) {
      case "checkout.session.completed": {
        console.log("u checkout.session.completed");
        const savedSession = await handleCompletedCheckoutSession(event);
        if (!savedSession) {
          return NextResponse.json(
            { error: "Unable to save checkout session" },
            { status: 500 }
          );
        }
        break;
      }

      case "customer.subscription.deleted": {
        // TODO Revoke access to the product
        // The customer might have changed the plan (higher or lower plan, cancel soon etc...)
        // const subscription = await stripe.subscriptions.retrieve(
        //   data.object.id
        // );
        // const user = await User.findOne({
        //   customerId: subscription.customer,
        // });

        // // Revoke access to your product
        // user.hasAccess = false;
        // await user.save();

        break;
      }

      default:
      // Unhandled event type
    }
  } catch (e) {
    console.error("stripe error: " + e.message + " | EVENT TYPE: " + eventType);
  }

  return NextResponse.json({});
}
