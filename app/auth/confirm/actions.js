import { createClient } from "@/utils/supabase/server";

export async function addUser() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);

  const { error } = await supabase.from("users").insert({
    id: user.id,
    name: "testno ime registracije",
    domain_url: "testna domena",
  });

  return { error };
}
