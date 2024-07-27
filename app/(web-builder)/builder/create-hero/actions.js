import { createClient } from "@/utils/supabase/client";

export async function getCreateHeroData() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: portfolio, error } = await supabase
    .from("portfolios")
    .select()
    .eq("user_id", user.id)
    .single();

  return { portfolio, error };
}

export async function upsertCreateHeroData(
  id,
  hero_image_rounded,
  hero_image_border,
  hero_border_style,
  hero_extra,
  hero_palette,
  hero_extra_style_elements,
  hero_welcome,
  hero_name,
  hero_short,
  hero_description,
  social_github,
  social_linkedin,
  social_x,
  social_facebook,
  social_instagram,
  social_youtube,
  social_tiktok,
  social_dribble,
  social_other
) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const upsertData = {
    hero_image_rounded: hero_image_rounded,
    hero_image_border: hero_image_border,
    hero_border_style: hero_border_style,
    hero_extra: hero_extra,
    hero_palette: hero_palette,
    hero_extra_style_elements: hero_extra_style_elements,
    hero_welcome: hero_welcome,
    hero_name: hero_name,
    hero_short: hero_short,
    hero_description: hero_description,
    social_github: social_github,
    social_linkedin: social_linkedin,
    social_x: social_x,
    social_facebook: social_facebook,
    social_instagram: social_instagram,
    social_youtube: social_youtube,
    social_tiktok: social_tiktok,
    social_dribble: social_dribble,
    social_other: social_other,
    user_id: user.id,
  };
  if (id) {
    upsertData.id = id;
  }

  const { data: portfolio, error } = await supabase
    .from("portfolios")
    .upsert(upsertData)
    .select()
    .single();

  return { portfolio, error };
}
