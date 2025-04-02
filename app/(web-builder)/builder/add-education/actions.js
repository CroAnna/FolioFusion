import { createClient } from "@/utils/supabase/client";

export async function getAddExperiencesSectionData() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("user.id " + user.id);
  const { data: portfolio, error } = await supabase
    .from("heros")
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
    .eq("user_id", user.id);

  console.log(experiences);
  const updatedExperiences = experiences.map((el) => {
    return {
      ...el,
      experience_icons: el.experience_icons.map((icon) => ({
        id: icon.icon_id,
        name: icon.icons.name,
      })),
    };
  });

  return { experiences: updatedExperiences, error };
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
    .from("heros")
    .upsert(upsertData)
    .select()
    .single();

  console.log(portfolio + JSON.stringify(upsertData));

  const experiences = await Promise.all(
    experiencesData.map(async (experience, index) => {
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

      const experienceId = data.id;
      if (experienceId) {
        const { error: deleteError } = await supabase
          .from("experience_icons")
          .delete()
          .eq("experience_id", experienceId);

        if (deleteError) console.error("Icon delete error:", deleteError);
      }
      console.log("experience.experience_icons", experience.experience_icons);

      if (experience.experience_icons?.length) {
        const iconInserts = [];

        for (const icon of experience.experience_icons) {
          if (!icon?.name || icon.name === "-") continue;

          const { data: iconData } = await supabase
            .from("icons")
            .select("id")
            .eq("name", icon.name)
            .single();

          if (iconData?.id) {
            iconInserts.push({
              experience_id: experienceId,
              icon_id: iconData.id,
            });
          }
        }

        if (iconInserts.length > 0) {
          const { error: insertError } = await supabase
            .from("experience_icons")
            .insert(iconInserts);

          if (insertError) console.error("Icon insert error:", insertError);
        }
      }
      console.log(data + error);
      return data;
    })
  );

  // include icons in new experiences array
  const experiencesWithIcons = experiencesData.map((el, index) => {
    return {
      ...experiences[index],
      experience_icons: el.experience_icons || [],
    };
  });

  console.log("----experiences", experiencesWithIcons);
  return { portfolio, experiences: experiencesWithIcons, error };
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

export async function getEnhancedText(text) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AI_SERVER_URL}/enhance-text`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: text }),
    }
  );

  if (!response.ok) {
    return { data: null, error: await response.json() };
  }

  const data = await response.json();
  return { data, error: null };
}
