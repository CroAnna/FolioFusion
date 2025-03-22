import { createClient } from "@/utils/supabase/client";
import { z } from "zod";

export async function getDataByDomain(domain) {
  // TODO refaktoriraj ovo zajedno s getAddProjectsData funkcijom jer imaju puno zajednickog koda

  const supabase = createClient();

  const { data: owner, error: ownerError } = await supabase
    .from("users")
    .select("id")
    .eq("domain_url", domain)
    .single();

  console.log(owner);
  if (owner == null) {
    return {
      code: 404,
      message: "Portfolio with that domain does not exist yet. 😕",
    };
  }

  const { data: portfolio, portfolioError } = await supabase
    .from("portfolios")
    .select()
    .eq("user_id", owner.id)
    .single();

  const { data: heroWithoutImage, heroError } = await supabase
    .from("heros")
    .select()
    .eq("user_id", owner.id)
    .single();

  let hero_image = null;
  if (heroWithoutImage && heroWithoutImage.hero_image) {
    const hero_image_filepath = heroWithoutImage.hero_image;

    const { data } = supabase.storage
      .from("images")
      .getPublicUrl(`${hero_image_filepath}`);
    hero_image = data;
  }
  const hero = { ...heroWithoutImage, hero_image: hero_image };

  const { data: projectsWithoutImages, projectsError } = await supabase
    .from("projects")
    .select(
      `*,
      project_icons (
        icon_id,
        icons (
          name
        )
      )`
    )
    .order("project_order", { ascending: true })
    .eq("user_id", owner.id);

  const updatedProjects = reorganizeIconsFieldToProperFormat(
    projectsWithoutImages,
    "project_icons"
  );

  let projects = [];
  updatedProjects.map((el) => {
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
    .select(
      `*,
      experience_icons (
        icon_id,
        icons (
          name
        )
      )`
    )
    .order("experience_order", { ascending: true })
    .eq("user_id", owner.id);

  console.log(experiences);

  const updatedExperiences = reorganizeIconsFieldToProperFormat(
    experiences,
    "experience_icons"
  );

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
    hero,
    hero_image,
    projects,
    experiences: updatedExperiences,
    activities,
    portfolio,
    portfolioError,
    ownerError,
    heroError,
    projectsError,
    experiencesError,
    activitiesError,
  };
}

const reorganizeIconsFieldToProperFormat = (list, icons_field) => {
  return list.map((el) => {
    return {
      ...el,
      [icons_field]: el[icons_field].map((icon) => ({
        id: icon.icon_id,
        name: icon.icons.name,
      })),
    };
  });
};

export async function sendIdea(prevState, formData) {
  const supabase = createClient();

  const schema = z
    .object({
      message_title: z.string().max(20, "Title can have max 20 characters."),
      message_text: z.string(),
      message_type: z.string(),
    })
    .required();

  const validation = schema.safeParse({
    message_title: formData.get("message_title"),
    message_text: formData.get("message_text"),
    message_type: formData.get("message_type"),
  });

  console.log(validation.data);

  if (validation.success) {
    const { message_text, message_title, message_type } = validation.data;
    const insertData = {
      title: message_title,
      description: message_text,
      type: message_type,
    };

    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      insertData.user_id = user.id;
    }

    const { error } = await supabase.from("ideas").insert(insertData);

    if (error) {
      console.log(error);
      return { message: error.message };
    }
    return { message: "Success" };
  } else {
    return {
      message: validation.error.issues.map((issue) => issue.message).join(", "),
    };
  }
}

export async function vote(id) {
  const supabase = createClient();

  const { data: currentData, error: fetchError } = await supabase
    .from("ideas")
    .select("votes")
    .eq("id", id)
    .single();

  if (fetchError) {
    console.log(fetchError);
    return { error: fetchError, updateError: null };
  }
  const { data, error: updateError } = await supabase
    .from("ideas")
    .update({ votes: currentData.votes + 1 })
    .eq("id", id);

  return { updateError, fetchError };
}

export async function getIcons() {
  const supabase = createClient();
  const { data: icons, error } = await supabase
    .from("icons")
    .select()
    .order("name", { ascending: true });
  if (error) console.log(error);
  return { icons, error };
}
