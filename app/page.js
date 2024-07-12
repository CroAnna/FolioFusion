import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { logout } from "./logout/actions";

export default async function Home() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  const { data: portfolios, error: portErr } = await supabase
    .from("portfolios")
    .select();
  console.log(data); // ovo je [] kad se koristi obicni anon key, makar sam zgasila rls na retku

  return (
    <main className="flex flex-col gap-4">
      <h2>Welcome! Please, log in to use the app.</h2>
      <pre>{JSON.stringify(portfolios, null, 2)}</pre>
      {portErr && <p>Error: {portErr}</p>}
      {error && <p>Error: {error}</p>}
      <Link href="builder/create-hero">
        <button className="btn btn-primary">Na buildera</button>
      </Link>
      {data && (
        <>
          <p>Hello {data.user.email}</p>
          <form action={logout}>
            <button className="btn secondary" type="submit">
              Logout
            </button>
          </form>
        </>
      )}
    </main>
  );
}
