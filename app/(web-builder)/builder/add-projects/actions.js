import { createClient } from "@/utils/supabase/client";
import { v4 as uuidv4 } from "uuid";

export async function getAddProjectsSectionData() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: portfolio, error } = await supabase
    .from("heros")
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
    .eq("user_id", user.id);

  console.log(projects);
  const updatedProjects = projects.map((el) => {
    return {
      ...el,
      project_icons: el.project_icons.map((icon) => ({
        id: icon.icon_id,
        name: icon.icons.name,
      })),
    };
  });
  console.log(updatedProjects);

  if (error) {
    console.log("error fetching projects:", error);
  }

  const projectsWithImages = await Promise.all(
    updatedProjects.map(async (project) => {
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

        return { ...project, project_img: data };
      }

      return { ...project, project_img: null };
    })
  );

  console.log("finalni projekti");
  console.log(projectsWithImages);

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

  const { data: portfolio, error } = await supabase
    .from("heros")
    .upsert(upsertData)
    .select()
    .eq("user_id", user.id)
    .single();

  console.log(portfolio);

  const projects = await Promise.all(
    projectsData.map(async (project) => {
      let filepath;
      const projectImage = project.project_img;

      let filename = null;
      if (projectImage && (projectImage.name || projectImage.public_url)) {
        if (projectImage.name) {
          filename = `${uuidv4()}-${projectImage.name}`;
        } else if (projectImage.public_url) {
          filename = `${uuidv4()}-${projectImage.public_url}`;
        }

        const { data, error: imageError } = await supabase.storage
          .from("images")
          .upload(filename, projectImage, {
            cacheControl: "3600",
            upsert: true,
          });

        if (imageError) {
          console.log(imageError);
        }

        filepath = data.path;
      }

      const upsertProjectsData = {
        project_title: project.project_title,
        project_description: project.project_description,
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
      console.log(filename);

      if (project.project_img && filename) {
        projectsWithImages = [
          ...projectsWithImages,
          {
            ...project,
            project_img: {
              publicUrl: filename.startsWith("https://xaocjvppqlrveojwlgsu")
                ? filename
                : `https://xaocjvppqlrveojwlgsu.supabase.co/storage/v1/object/public/images/${filename}`,
            },
          },
        ];
      } else {
        projectsWithImages = [
          ...projectsWithImages,
          {
            ...project,
          },
        ];
      }

      const { data, error } = await supabase
        .from("projects")
        .upsert(upsertProjectsData)
        .select()
        .single();

      // update technology icons
      const projectId = data.id;
      if (projectId) {
        const { error: deleteError } = await supabase
          .from("project_icons")
          .delete()
          .eq("project_id", projectId);

        if (deleteError) console.error("Icon delete error:", deleteError);
      }

      if (project.project_icons?.length) {
        const iconInserts = [];

        for (const icon of project.project_icons) {
          if (!icon?.name || icon.name === "-") continue;

          const { data: iconData } = await supabase
            .from("icons")
            .select("id")
            .eq("name", icon.name)
            .single();

          if (iconData?.id) {
            iconInserts.push({
              project_id: projectId,
              icon_id: iconData.id,
            });
          }
        }

        if (iconInserts.length > 0) {
          const { error: insertError } = await supabase
            .from("project_icons")
            .insert(iconInserts);

          if (insertError) console.error("Icon insert error:", insertError);
        }
      }

      console.log(data + error);
      return data;
    })
  );
  console.log("----projectsWithImages", projectsWithImages);

  projectsWithImages.sort((a, b) => a.project_order - b.project_order);
  return { portfolio, projectsWithImages, error };
}

export async function deleteProjectById(id) {
  const supabase = createClient();
  const { data, error } = await supabase.from("projects").delete().eq("id", id);
  return { data, error };
}
