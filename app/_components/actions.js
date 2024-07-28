import { createClient } from "@/utils/supabase/client";

export async function getDataByDomain(domain) {
  const supabase = createClient();

  const { data: owner, error: ownerError } = await supabase
    .from("users")
    .select("id")
    .eq("domain_url", domain)
    .single();

  const { data: portfolioWithoutImage, portfolioError } = await supabase
    .from("portfolios")
    .select()
    .eq("user_id", owner.id)
    .single();

  let hero_image = null;
  if (portfolioWithoutImage.hero_image) {
    const hero_image_filepath = portfolioWithoutImage.hero_image;

    const { data } = supabase.storage
      .from("images")
      .getPublicUrl(`${hero_image_filepath}`);
    hero_image = data;
  }
  const portfolio = { ...portfolioWithoutImage, hero_image: hero_image };

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
    hero_image,
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
