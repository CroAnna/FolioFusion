import { createClient } from "@/utils/supabase/client";

export async function getCreateBasicInfo() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: portfolio, error } = await supabase
    .from("portfolios")
    .select()
    .eq("user_id", user.id)
    .single();
  console.log(portfolio);

  return { portfolio, error };
}

export async function upsertCreatePortfolioBasicData(id, portfolio_palette) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const upsertData = {
    portfolio_palette: portfolio_palette,
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
