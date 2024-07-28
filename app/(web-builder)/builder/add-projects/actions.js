import { createClient } from "@/utils/supabase/client";
import { v4 as uuidv4 } from "uuid";

export async function getAddProjectsSectionData() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

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

  const { data: projects, error } = await supabase
    .from("projects")
    .select()
    .order("project_order", { ascending: true })
    .eq("user_id", user.id);

  if (error) {
    console.log("error fetching projects:", error);
  }

  const projectsWithImages = await Promise.all(
    projects.map(async (project) => {
      if (project.project_img) {
        const { data, error } = await supabase.storage
          .from("images")
          .getPublicUrl(project.project_img);

        if (error) {
          console.error(
            `Error fetching image for project ${project.id}:`,
            error
          );
          return { ...project, project_img: null };
        }

        return { ...project, project_img: data }; //
      }

      return { ...project, project_img: null };
    })
  );

  return { projects: projectsWithImages, error: null };
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
  let projectsWithImages = [];

  const upsertData = {
    project_group_description: project_group_description,
    project_group_title: project_group_title,
    user_id: user.id,
  };

  if (id) {
    upsertData.id = id;
  }

  const { data: portfolioWithoutImage, error } = await supabase
    .from("portfolios")
    .select()
    .eq("user_id", user.id)
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

  const projects = await Promise.all(
    projectsData.map(async (project) => {
      let filepath;
      const projectImage = project.project_img;

      if (projectImage && (projectImage.name || projectImage.public_url)) {
        let filename;
        if (projectImage.name) {
          filename = `${uuidv4()}-${projectImage.name}`;
        } else if (projectImage.public_url) {
          filename = `${uuidv4()}-${projectImage.public_url}`;
        }

        const { data, error: imageError } = await supabase.storage
          .from("images")
          .upload(filename, projectImage, {
            cacheControl: "3600",
            upsert: false,
          });

        if (imageError) {
          console.log(imageError);
        }

        filepath = data.path;
      }

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
        project_img: projectImage ? filepath : null,
        project_order: project.project_order,
        user_id: user.id,
      };

      if (project.id) {
        console.log(`vec postoji ${id}`);
        upsertProjectsData.id = project.id;
      }

      if (project.project_img) {
        projectsWithImages = [
          ...projectsWithImages,
          { ...project, project_img: project.project_img },
        ];
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

  return { portfolio, projectsWithImages, error };
}

export async function deleteProjectById(id) {
  const supabase = createClient();
  const { data, error } = await supabase.from("projects").delete().eq("id", id);
  return { data, error };
}
