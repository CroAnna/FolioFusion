"use server";

import { isPaymentActive } from "@/utils/common/methods";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getUserData() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !user.id) return { userData: null, error: "User not found" };

  const { data: userData, error } = await supabase
    .from("users")
    .select()
    .eq("id", user.id)
    .single();

  return { userData, error };
}

export async function checkIfUserHasActivePlan(identifier, type) {
  const supabase = createClient();

  let query = supabase.from("users").select().single();

  if (type === "email") {
    query = query.eq("email", identifier);
  } else if (type === "domain") {
    query = query.eq("domain_url", identifier);
  }

  const { data: userData, error: userError } = await query;

  if (userError || !userData) {
    console.error("Error fetching user data:", userError);
    return false;
  }

  const { data: ordersData, error: ordersError } = await supabase
    .from("orders")
    .select()
    .eq("email", userData.email);

  if (ordersError || !ordersData || ordersData.length === 0) {
    console.log("is not active");

    console.error("Error fetching orders data:", ordersError);
    return false;
  }

  for (const order of ordersData) {
    if (order.description === "FolioFusion - Lifetime Deal") {
      return true;
    } else {
      const isActive = isPaymentActive(order.created_at);
      if (isActive) {
        console.log("is active");

        return true;
      }
    }
  }

  // no active order
  await supabase
    .from("users")
    .update({ access_granted: false, domain_url: null })
    .eq("id", userData.id);

  console.log("is not active");

  return false;
}

export async function getIdeas() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("ideas")
    .select()
    .order("votes", { ascending: false })
    .eq("type", "Idea");

  if (error) console.log(error);
  return { data, error };
}

export async function deleteUserAccount() {
  // delete from 2 tables - users and auth table

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // supabase function/sql editor routine, not sure. granted access to auth users to make it work. if user before this logs out it will not work because the SQL query uses auth.uid()
  await supabase.rpc("delete_user");

  const { data, error } = await supabase
    .from("users")
    .delete()
    .eq("id", user.id);
  console.log(data, error);

  if (!error) {
    revalidatePath("/", "layout");
    redirect("/");
  }
}

export async function getOrdersByUser() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: orders, error } = await supabase
    .from("orders")
    .select()
    .order("created_at", { ascending: false })
    .eq("email", user.email);

  if (error) console.log(error);
  return { orders, error };
}
