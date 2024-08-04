import { createClient } from "@/utils/supabase/client";

export async function getDataByDomain(domain) {
  const supabase = createClient();

  const { data: owner, error: ownerError } = await supabase
    .from("users")
    .select("id")
    .eq("domain_url", domain)
    .single();

  // TODO napravi da ak tu vrati owner null da baci da portfolio s tom domenom jos ne postoji

  console.log(owner);

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

  const { data: projectsWithoutImages, projectsError } = await supabase
    .from("projects")
    .select()
    .order("project_order", { ascending: true })
    .eq("user_id", owner.id);
  console.log(projectsWithoutImages);

  let projects = [];
  projectsWithoutImages.map((el) => {
    let project_image = null;
    if (el.project_img) {
      const project_img_filepath = el.project_img;
      const { data } = supabase.storage
        .from("images")
        .getPublicUrl(`${project_img_filepath}`);
      project_image = data;
    }
    const projectWithImage = { ...el, project_img: project_image };
    projects = [...projects, projectWithImage];
  });

  const { data: experiences, experiencesError } = await supabase
    .from("experiences")
    .select()
    .order("experience_order", { ascending: true })
    .eq("user_id", owner.id);

  const { data: activitiesWithoutImages, activitiesError } = await supabase
    .from("activities")
    .select()
    .order("activity_order", { ascending: true })
    .eq("user_id", owner.id);
  console.log(activitiesWithoutImages);

  let activities = [];
  activitiesWithoutImages.map((el) => {
    let activity_image = null;
    if (el.activity_img) {
      const activity_img_filepath = el.activity_img;
      const { data } = supabase.storage
        .from("images")
        .getPublicUrl(`${activity_img_filepath}`);
      activity_image = data;
    }
    const activityWithImage = { ...el, activity_img: activity_image };
    activities = [...activities, activityWithImage];
  });

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
