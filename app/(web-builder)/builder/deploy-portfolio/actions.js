import { createClient } from "@/utils/supabase/client";

export async function upsertDeploymentData(domain) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: _user, error } = await supabase
    .from("users")
    .upsert({ id: user.id, domain_url: domain })
    .select()
    .single();

  return { _user, error };
}

export async function getUserData() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: userData, error } = await supabase
    .from("users")
    .select()
    .eq("id", user.id)
    .single();

  return { userData, error };
}

export async function checkIfDomainIsTaken(domain) {
  const supabase = createClient();
  const { data: _domain, error } = await supabase
    .from("users")
    .select()
    .eq("domain_url", domain)
    .maybeSingle(); // ako je slobodno vrati null i to je falsy, ako je zauzeto vrati taj objekt i to je truthy
  return !!_domain; // pretvori null u false, objekt u true
}
