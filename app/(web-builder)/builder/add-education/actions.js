import { createClient } from "@/utils/supabase/client";

export async function getAddExperiencesSectionData() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("user.id " + user.id);
  const { data: portfolio, error } = await supabase
    .from("portfolios")
    .select("id, experience_group_title, experience_group_description")
    .eq("user_id", user.id)
    .single();

  console.log(portfolio);
  return { portfolio, error };
}

export async function getAddExperiencesData() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("user.id " + user.id);
  const { data: experiences, error } = await supabase
    .from("experiences")
    .select()
    .order("experience_order", { ascending: true })
    .eq("user_id", user.id);

  console.log(experiences);

  return { experiences, error };
}

export async function upsertAddExperiencesData(
  id,
  experience_group_description,
  experience_group_title,
  experiencesData
) {
  console.log(experiencesData);
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const upsertData = {
    experience_group_description: experience_group_description,
    experience_group_title: experience_group_title,
    user_id: user.id,
  };
  console.log(id);
  if (id) {
    upsertData.id = id;
  }

  const { data: portfolio, error } = await supabase
    .from("portfolios")
    .upsert(upsertData)
    .select()
    .single();

  console.log(portfolio + JSON.stringify(upsertData));

  const experiences = await Promise.all(
    experiencesData.map(async (experience) => {
      const upsertExperienceData = {
        experience_title: experience.experience_title,
        experience_description: experience.experience_description,
        experience_time: experience.experience_time,
        experience_keywords: experience.experience_keywords,
        experience_type: experience.experience_type,
        experience_order: experience.experience_order,
        user_id: user.id,
      };
      console.log(experience.id);

      if (experience.id) {
        console.log(`vec postoji ${id}`);
        upsertExperienceData.id = experience.id;
      }

      const { data, error } = await supabase
        .from("experiences")
        .upsert(upsertExperienceData)
        .select()
        .single();

      console.log(data + error);
      return data;
    })
  );

  console.log(experiences);
  return { portfolio, experiences, error };
}

export async function deleteExperienceById(id) {
  console.log(id);
  const supabase = createClient();
  const { data, error } = await supabase
    .from("experiences")
    .delete()
    .eq("id", id);
  return { data, error };
}
