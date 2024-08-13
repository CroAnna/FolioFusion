import { createClient } from "@/utils/supabase/client";
import { v4 as uuidv4 } from "uuid";

export async function getCreateHeroData() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: heroWithoutImage, error } = await supabase
    .from("heros")
    .select()
    .eq("user_id", user.id)
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

  const { data: portfolio, error2 } = await supabase
    .from("portfolios")
    .select()
    .eq("user_id", user.id)
    .single();

  return { hero, hero_image, error, portfolio, error2 };
}

export async function upsertCreateHeroData(
  id,
  hero_image,
  hero_image_rounded,
  hero_image_border,
  hero_border_style,
  hero_extra,
  hero_scroll_to_top,
  hero_extra_style_elements,
  hero_variant,
  hero_welcome,
  hero_bg_disabled_mobile,
  hero_mobile_alignment,
  hero_desktop_alignment,
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

  let filepath;
  if (hero_image && (hero_image.name || hero_image.public_url)) {
    let filename;
    if (hero_image.name) {
      filename = `${uuidv4()}-${hero_image.name}`;
    } else if (hero_image.public_url) {
      filename = `${uuidv4()}-${hero_image.public_url}`;
    }

    const { data, error: imageError } = await supabase.storage
      .from("images")
      .upload(filename, hero_image, {
        cacheControl: "3600",
        upsert: false,
      });

    if (imageError) {
      console.log(imageError);
    }

    filepath = data.path;
  }
  const upsertData = {
    hero_image: hero_image ? filepath : null,
    hero_image_rounded: hero_image_rounded,
    hero_image_border: hero_image_border,
    hero_border_style: hero_border_style,
    hero_extra: hero_extra,
    hero_scroll_to_top: hero_scroll_to_top,
    hero_extra_style_elements: hero_extra_style_elements,
    hero_variant: hero_variant,
    hero_welcome: hero_welcome,
    hero_bg_disabled_mobile: hero_bg_disabled_mobile,
    hero_mobile_alignment: hero_mobile_alignment,
    hero_desktop_alignment: hero_desktop_alignment,
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

  console.log(id);

  if (id) {
    upsertData.id = id;
  }

  const { data: heroWithoutImage, error } = await supabase
    .from("heros")
    .upsert(upsertData)
    .select()
    .single();

  let hero_image_db = null;
  if (heroWithoutImage && heroWithoutImage.hero_image) {
    const hero_image_filepath = heroWithoutImage.hero_image;
    const { data } = supabase.storage
      .from("images")
      .getPublicUrl(`${hero_image_filepath}`);
    hero_image_db = data;
  }
  const hero = { ...heroWithoutImage, hero_image: hero_image_db };
  return { hero, hero_image, error };
}
