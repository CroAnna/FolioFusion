import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { addUser } from "./actions";

export async function GET(request) {
  console.log("authenticating");

  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type");
  const next = searchParams.get("next") ?? "/";

  if (token_hash && type) {
    const supabase = createClient();

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });
    if (!error) {
      // add that user to users in DB
      const { error: error2 } = await addUser();

      if (!error2) {
        // redirect user to specified redirect URL or root of app
        redirect(next);
      }
      console.log(error2);
    }
    console.log(error);
  }

  // redirect the user to an error page with some instructions
  redirect("/error");
}
