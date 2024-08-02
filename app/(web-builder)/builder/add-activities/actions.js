import { createClient } from "@/utils/supabase/client";
import { v4 as uuidv4 } from "uuid";

export async function getAddActivitiesSectionData() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("user.id " + user.id);
  const { data: portfolio, error } = await supabase
    .from("portfolios")
    .select("id, activity_bg_shape")
    .eq("user_id", user.id)
    .single();

  console.log(portfolio);
  return { portfolio, error };
}

export async function getAddActivitiesData() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("user.id " + user.id);
  const { data: activities, error } = await supabase
    .from("activities")
    .select()
    .order("activity_order", { ascending: true })
    .eq("user_id", user.id);

  console.log(activities);

  if (error) {
    console.log("error fetching activities:", error);
  }

  const activitiesWithImages = await Promise.all(
    activities.map(async (activity) => {
      if (activity.activity_img) {
        const { data, error } = await supabase.storage
          .from("images")
          .getPublicUrl(activity.activity_img);

        if (error) {
          console.error(
            `Error fetching image for activity ${activity.id}:`,
            error
          );
          return { ...activity, activity_img: null };
        }

        return { ...activity, activity_img: data }; //
      }

      return { ...activity, activity_img: null };
    })
  );

  return { activities: activitiesWithImages, error: null };
}

export async function upsertAddActivitiesData(
  id,
  activity_bg_shape,
  activitiesData
) {
  console.log(activitiesData);
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  let activitiesWithImages = [];

  const upsertData = {
    activity_bg_shape: activity_bg_shape,
    user_id: user.id,
  };

  if (id) {
    upsertData.id = id;
  }

  const { data: portfolioWithoutImage, error } = await supabase
    .from("portfolios")
    .upsert(upsertData)
    .select()
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

  const activities = await Promise.all(
    activitiesData.map(async (activity) => {
      let filepath;
      const activityImage = activity.activity_img;

      if (activityImage && (activityImage.name || activityImage.public_url)) {
        let filename;
        if (activityImage.name) {
          filename = `${uuidv4()}-${activityImage.name}`;
        } else if (activityImage.public_url) {
          filename = `${uuidv4()}-${activityImage.public_url}`;
        }
        const { data, error: imageError } = await supabase.storage
          .from("images")
          .upload(filename, activityImage, {
            cacheControl: "3600",
            upsert: false,
          });

        if (imageError) {
          console.log(imageError);
        }

        filepath = data.path;
      }

      console.log(activityImage);
      console.log(filepath);

      const upsertActivityData = {
        activity_title: activity.activity_title,
        activity_description: activity.activity_description,
        activity_img: activityImage ? filepath : null,
        activity_type: activity.activity_type,
        activity_order: activity.activity_order,
        user_id: user.id,
      };
      console.log(activity.id);

      if (activity.id) {
        console.log(`vec postoji ${id}`);
        upsertActivityData.id = activity.id;
      }
      console.log(upsertActivityData.activity_img);
      console.log(activity.activity_img);

      if (activity.activity_img) {
        activitiesWithImages = [
          ...activitiesWithImages,
          { ...activity, activity_img: activity.activity_img },
        ];
      } else {
        activitiesWithImages = [
          ...activitiesWithImages,
          { ...activity, activity_img: null },
        ];
      }

      const { data, error } = await supabase
        .from("activities")
        .upsert(upsertActivityData)
        .select()
        .single();

      console.log(data + error);
      return data;
    })
  );

  console.log(activities);
  console.log(activitiesWithImages);

  return { portfolio, activitiesWithImages };
}

export async function deleteActivityById(id) {
  console.log(id);
  const supabase = createClient();
  const { data, error } = await supabase
    .from("activities")
    .delete()
    .eq("id", id);
  return { data, error };
}
