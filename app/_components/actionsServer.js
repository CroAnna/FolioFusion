import { createClient } from "@/utils/supabase/server";

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
