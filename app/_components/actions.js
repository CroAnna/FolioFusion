import { createClient } from "@/utils/supabase/client";

export async function getDataByDomain(domain) {
  const supabase = createClient();

  const { data: owner, error: ownerError } = await supabase
    .from("users")
    .select("id")
    .eq("domain_url", domain)
    .single();

  const { data: portfolio, portfolioError } = await supabase
    .from("portfolios")
    .select()
    .eq("user_id", owner.id)
    .single();

  const { data: projects, projectsError } = await supabase
    .from("projects")
    .select()
    .order("project_order", { ascending: true })
    .eq("user_id", owner.id);

  const { data: experiences, experiencesError } = await supabase
    .from("experiences")
    .select()
    .order("experience_order", { ascending: true })
    .eq("user_id", owner.id);

  const { data: activities, activitiesError } = await supabase
    .from("activities")
    .select()
    .order("activity_order", { ascending: true })
    .eq("user_id", owner.id);

  return {
    portfolio,
    projects,
    experiences,
    activities,
    ownerError,
    portfolioError,
    projectsError,
    experiencesError,
    activitiesError,
  };
}
