import Link from "next/link";
import {
  getPrimaryBgColors,
  getPrimaryColors,
  getSecondaryBgColors,
  getSecondaryTextColor,
  getSecondaryColors,
  projectLinkIcons,
  getPrimaryTextColor,
  getBgColor,
  getIconBgColor,
} from "../_libs/utils";
import { PortfolioContext } from "./PortfolioProvider";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";

const ProjectCard = ({ project, projectIndex }) => {
  const { portfolioStackContextData, portfolioStackProjectsContextData } =
    useContext(PortfolioContext);
  const palette = portfolioStackContextData.hero_palette;
  const [imageUrl, setImageUrl] = useState("");

  const selectedIcon1 = projectLinkIcons.find(
    (el) => el.value === project.project_link_1_icon
  );
  const selectedIcon2 = projectLinkIcons.find(
    (el) => el.value === project.project_link_2_icon
  );

  const iconBg = getIconBgColor(palette);

  useEffect(() => {
    let url;
    try {
      // TODO provjeri kak ovo dela kad se izbrise neki item
      console.log(portfolioStackProjectsContextData[projectIndex].project_img);
      if (
        portfolioStackProjectsContextData[projectIndex].project_img instanceof
        File
      ) {
        url = URL.createObjectURL(
          portfolioStackProjectsContextData[projectIndex].project_img
        );
        console.log("1");
        console.log(url);
      } else {
        console.log("2");
        console.log(portfolioStackProjectsContextData[projectIndex]);
        console.log(
          portfolioStackProjectsContextData[projectIndex].project_img // OVO MORA BIT OBJEKT
        );
        url =
          portfolioStackProjectsContextData[projectIndex].project_img.publicUrl;
      }
    } catch (error) {
      console.log("3");
      console.log(url);

      console.log("No image found or null: ", error);
      url = "";
    }
    console.log("postavljanje image urla " + url);
    setImageUrl(url);
  }, [portfolioStackProjectsContextData[projectIndex].project_img]);

  return (
    <div
      className={`${getSecondaryBgColors(palette)} ${getPrimaryTextColor(
        palette
      )} rounded-3xl shadow-custom-lg m-2 p-1 flex flex-col md:flex-row`}
    >
      <div className="m-5 w-full md:w-[591px] h-96 overflow-hidden">
        {/* {project && project?.project_img && project.project_img.toString()} */}
        {/* --- */}
        {/* {JSON.stringify(imageUrl)} */}
        {project.project_img && (
          <Image
            width={400}
            height={400} // TODO napravi da se pomice
            src={imageUrl}
            alt={project.project_title}
            className="rounded-xl w-full h-full object-cover transition-all duration-[5000ms] ease-in-out object-top hover:object-bottom"
          />
        )}
      </div>
      <div className="flex flex-col justify-center items-center gap-4 p-4 md:flex-1">
        {" "}
        {/* {imageUrl && imageUrl.toString()} */}
        {/* {JSON.stringify(imageUrl)} */}
        <h2 className=" text-2xl font-semibold">{project.project_title}</h2>
        <p className=" text-lg text-center leading-6">
          {project.project_description}
        </p>
        <div className="flex gap-6 p-2">
          {project.project_technology_1_icon &&
            project.project_technology_1_icon != "-" && (
              <Image
                width={32}
                height={32}
                src={`https://go-skill-icons.vercel.app/api/icons?i=${project.project_technology_1_icon}&theme=${iconBg}`}
                alt={""}
                className="w-full h-full object-cover"
              />
            )}
          {project.project_technology_2_icon &&
            project.project_technology_2_icon != "-" && (
              <Image
                width={32}
                height={32}
                src={`https://go-skill-icons.vercel.app/api/icons?i=${project.project_technology_2_icon}&theme=${iconBg}`}
                alt={""}
                className="w-full h-full object-cover"
              />
            )}
          {project.project_technology_3_icon &&
            project.project_technology_3_icon != "-" && (
              <Image
                width={32}
                height={32}
                src={`https://go-skill-icons.vercel.app/api/icons?i=${project.project_technology_3_icon}&theme=${iconBg}`}
                alt={""}
                className="w-full h-full object-cover"
              />
            )}
          {project.project_technology_4_icon &&
            project.project_technology_4_icon != "-" && (
              <Image
                width={32}
                height={32}
                src={`https://go-skill-icons.vercel.app/api/icons?i=${project.project_technology_4_icon}&theme=${iconBg}`}
                alt={""}
                className="w-full h-full object-cover"
              />
            )}
          {project.project_technology_5_icon &&
            project.project_technology_5_icon != "-" && (
              <Image
                width={32}
                height={32}
                src={`https://go-skill-icons.vercel.app/api/icons?i=${project.project_technology_5_icon}&theme=${iconBg}`}
                alt={""}
                className="w-full h-full object-cover"
              />
            )}
        </div>
        <div className="flex gap-2 justify-between w-full">
          {project.project_link_1_url && project.project_link_1_text && (
            <Link href={project.project_link_1_url} className="w-full">
              <button
                className={`py-2 flex w-full items-center justify-center gap-1 ${getBgColor(
                  palette
                )} text-lg rounded-lg shadow-custom-sm font-medium `}
                target="_blank"
                rel="noreferrer"
              >
                {selectedIcon1 && selectedIcon1.icon}
                &nbsp;
                {project.project_link_1_text}
              </button>
            </Link>
          )}
          {project.project_link_2_url && project.project_link_2_text && (
            <Link href={project.project_link_2_url} className="w-full">
              <button
                className={`py-2 hover:none flex w-full items-center justify-center gap-1 ${getPrimaryBgColors(
                  palette
                )} ${getSecondaryTextColor(
                  palette
                )} text-lg  rounded-lg font-medium`}
                target="_blank"
                rel="noreferrer"
              >
                {selectedIcon2 && selectedIcon2.icon}
                &nbsp;
                {project.project_link_2_text}
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
