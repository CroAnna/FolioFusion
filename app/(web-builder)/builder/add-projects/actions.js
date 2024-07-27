import { createClient } from "@/utils/supabase/client";

export async function getAddProjectsSectionData() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("user.id " + user.id);
  const { data: portfolio, error } = await supabase
    .from("portfolios")
    .select("id, project_group_title, project_group_description")
    .eq("user_id", user.id)
    .single();

  return { portfolio, error };
}

export async function getAddProjectsData() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("user.id " + user.id);
  const { data: projects, error } = await supabase
    .from("projects")
    .select()
    .order("project_order", { ascending: true })
    .eq("user_id", user.id);

  console.log(projects);

  return { projects, error };
}

export async function upsertAddProjectsData(
  id,
  project_group_description,
  project_group_title,
  projectsData
) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const upsertData = {
    project_group_description: project_group_description,
    project_group_title: project_group_title,
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

  const projects = await Promise.all(
    projectsData.map(async (project) => {
      const upsertProjectsData = {
        project_title: project.project_title,
        project_description: project.project_description,
        project_technology_1_icon: project.project_technology_1_icon,
        project_technology_2_icon: project.project_technology_2_icon,
        project_technology_3_icon: project.project_technology_3_icon,
        project_technology_4_icon: project.project_technology_4_icon,
        project_technology_5_icon: project.project_technology_5_icon,
        project_link_1_url: project.project_link_1_url,
        project_link_2_url: project.project_link_2_url,
        project_link_1_text: project.project_link_1_text,
        project_link_2_text: project.project_link_2_text,
        project_link_1_icon: project.project_link_1_icon,
        project_link_2_icon: project.project_link_2_icon,
        project_img: project.project_img,
        project_order: project.project_order,
        user_id: user.id,
      };
      console.log(project.id);

      if (project.id) {
        console.log(`vec postoji ${id}`);
        upsertProjectsData.id = project.id;
      }

      const { data, error } = await supabase
        .from("projects")
        .upsert(upsertProjectsData)
        .select()
        .single();
      console.log(data + error);
      return data;
    })
  );

  return { portfolio, projects, error };
}

export async function deleteProjectById(id) {
  const supabase = createClient();
  const { data, error } = await supabase.from("projects").delete().eq("id", id);
  return { data, error };
}
