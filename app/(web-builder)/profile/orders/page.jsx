import { getOrdersByUser } from "@/app/_components/actionsServer";
import {
  extractDateTime,
  getOneYearInFuture,
  isPaymentActive,
} from "@/utils/common/methods";
import Link from "next/link";

const Orders = async () => {
  const { orders } = await getOrdersByUser();

  return (
    <div className="md:w-full flex flex-col gap-6 max-w-screen-xl mx-4 md:mx-auto md:p-10 xl:px-0 md:pt-20">
      <h2 className="text-2xl font-bold">My orders</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        {orders.length > 0
          ? orders.map((el, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-xl border-2 border-neutral-600 w-full"
              >
                <div className="card-body">
                  <div className="flex justify-between">
                    <h2 className="card-title">Order</h2>
                    {el.description == "FolioFusion - Lifetime Deal" ||
                    isPaymentActive(el.created_at) ? (
                      <h2 className={`card-title text-emerald-400`}>Active</h2>
                    ) : (
                      <h2 className={`card-title text-red-400`}>Expired</h2>
                    )}
                  </div>
                  <p>{extractDateTime(el.created_at).toString()}</p>
                  <p>{el.description}</p>
                  <p>
                    Expiration date:{" "}
                    {el.description == "FolioFusion - 1-Year Pass"
                      ? getOneYearInFuture(el.created_at).toString()
                      : "Never"}
                  </p>
                </div>
              </div>
            ))
          : "No orders yet."}
      </div>
      <div>
        <p>
          When renewing, the ending date is 1 year from the time when the new
          order is created.
        </p>
        <h3>
          Have a question?{" "}
          <Link href="/send-feedback" className="underline text-emerald-500">
            Send a message
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Orders;
