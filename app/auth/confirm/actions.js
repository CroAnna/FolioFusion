import { createClient } from "@/utils/supabase/server";

export async function addUser() {
  console.log("adding user");

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);

  const { error } = await supabase.from("users").insert({
    id: user.id,
    email: user.email,
    domain_url: null,
    access_granted: false,
    order_id: null,
  });
  console.log(error);

  return { error };
}
