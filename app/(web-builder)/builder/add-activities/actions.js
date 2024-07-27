import { createClient } from "@/utils/supabase/client";

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

  return { activities, error };
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

  const upsertData = {
    activity_bg_shape: activity_bg_shape,
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

  const activities = await Promise.all(
    activitiesData.map(async (activity) => {
      const upsertActivityData = {
        activity_title: activity.activity_title,
        activity_description: activity.activity_description,
        activity_img: activity.activity_img,
        activity_type: activity.activity_type,
        activity_order: activity.activity_order,
        user_id: user.id,
      };
      console.log(activity.id);

      if (activity.id) {
        console.log(`vec postoji ${id}`);
        upsertActivityData.id = activity.id;
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
  return { activities };
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
