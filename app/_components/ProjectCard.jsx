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
  getHoverBgColor,
} from "../_libs/utils";
import { PortfolioContext } from "./PortfolioProvider";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";

const ProjectCard = ({
  project,
  projectIndex,
  projectsDesign,
  projectsAlignment,
}) => {
  const { portfolioStackBasicContextData, portfolioStackProjectsContextData } =
    useContext(PortfolioContext);
  const palette = portfolioStackBasicContextData.portfolio_palette;
  const fontPrimary = portfolioStackBasicContextData.portfolio_font_primary;
  const [imageUrl, setImageUrl] = useState("");

  const selectedIcon1 = projectLinkIcons.find(
    (el) => el.value === project.project_link_1_icon
  );
  const selectedIcon2 = projectLinkIcons.find(
    (el) => el.value === project.project_link_2_icon
  );

  const iconBg = getIconBgColor(palette);

  const bgColorVariantsPrimary = {
    "Palette 1": "bg-zinc-100 hover:bg-zinc-200",
    "Palette 2": "bg-sky-50 hover:bg-sky-200",
    "Palette 3": "bg-orange-50 hover:bg-orange-200",
    "Palette 4": "bg-slate-800 hover:bg-slate-950",
    "Palette 5": "bg-neutral-900 hover:bg-neutral-700",
    "Palette 6": "bg-stone-900 hover:bg-stone-700",
    "Palette 7": "bg-zinc-100 hover:bg-zinc-300",
  };

  const bgColorVariantsSecondary = {
    "Palette 1": "bg-amber-600 hover:bg-amber-700",
    "Palette 2": "bg-blue-800 hover:bg-blue-950",
    "Palette 3": "bg-orange-800 hover:bg-orange-950",
    "Palette 4": "bg-yellow-400 hover:bg-yellow-600",
    "Palette 5": "bg-lime-500 hover:bg-lime-400",
    "Palette 6": "bg-yellow-400 hover:bg-yellow-200",
    "Palette 7": "bg-red-500 hover:bg-red-700",
  };

  const fontVariants = {
    inter: "font-inter",
    poppins: "font-poppins",
    robotoMono: "font-robotoMono",
    greyQo: "font-greyQo",
    sankofaDisplay: "font-sankofaDisplay",
    gabarito: "font-gabarito",
    montserrat: "font-montserrat",
  };

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
      )} rounded-3xl shadow-custom-lg p-3 md:p-1 
      ${
        projectsDesign == "Design 1"
          ? "flex flex-col md:flex-row "
          : projectsDesign == "Design 2"
          ? "rounded-xl lg:rounded-none flex flex-col md:flex-col gap-4 lg:gap-0"
          : projectsDesign == "Design 3"
          ? ""
          : projectsDesign == "Design 4" && "flex flex-col gap-4 lg:gap-0"
      }
      ${
        projectsAlignment == "left"
          ? "flex-col-reverse lg:flex-row"
          : projectsAlignment == "right"
          ? "flex-col-reverse lg:flex-row-reverse"
          : projectIndex % 2 == 0
          ? "flex-col-reverse lg:flex-row"
          : "flex-col-reverse lg:flex-row-reverse"
      }`}
      style={
        (projectsDesign === "Design 3" || projectsDesign === "Design 4") &&
        imageUrl
          ? {
              backgroundImage: `linear-gradient(${
                getIconBgColor(palette) === "dark"
                  ? "rgba(0, 0, 0, 1)"
                  : "rgba(255, 255, 255, 1)"
              }, ${
                getIconBgColor(palette) === "dark"
                  ? "rgba(0, 0, 0, 0.7)"
                  : "rgba(255, 255, 255, 0.7)"
              }), url(${imageUrl})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
    >
      <div
        className={`w-full overflow-hidden relative 
          ${
            projectsDesign == "Design 1"
              ? "h-[400px] md:m-5 md:w-[591px]"
              : projectsDesign == "Design 2"
              ? "min-w-40 h-[400px] lg:w-44 md:w-full"
              : projectsDesign == "Design 3"
              ? ""
              : projectsDesign == "Design 4" &&
                "min-w-40 h-[320px] lg:w-40 lg:h-[400px] md:m-2"
          }
       `}
      >
        {project.project_img && imageUrl && (
          <Image
            quality={40}
            layout="fill"
            objectFit="cover"
            src={imageUrl}
            alt={project.project_title}
            className={`rounded-xl w-full h-full object-cover transition-all duration-[5000ms] ease-in-out object-top hover:object-bottom ${
              projectsDesign == "Design 2"
                ? "lg:p-4"
                : projectsDesign == "Design 3"
                ? ""
                : projectsDesign == "Design 4" && ""
            }`}
          />
        )}
      </div>
      <div
        className={`flex flex-col justify-center items-center  md:flex-1 lg:m-4 ${
          projectsDesign == "Design 1"
            ? "px-2 py-3 lg:p-0 gap-4"
            : projectsDesign == "Design 2"
            ? ""
            : projectsDesign == "Design 3"
            ? "flex h-full justify-between lg:pb-12 lg:pt-8 gap-4"
            : projectsDesign == "Design 4" && "gap-4"
        }`}
      >
        <div
          className={`flex flex-col justify-center items-center gap-4 p-2 md:p-4 ${
            projectsDesign == "Design 1"
              ? ""
              : projectsDesign == "Design 2"
              ? "flex flex-1 flex-col h-full flex-grow justify-between"
              : projectsDesign == "Design 3" && ""
          }`}
        >
          <h2
            className={`text-xl md:text-2xl font-semibold ${fontVariants[fontPrimary]}`}
          >
            {project.project_title}
          </h2>
          <p
            className={`md:text-lg text-center leading-6 ${fontVariants[fontPrimary]} flex flex-1 flex-col h-full flex-grow`}
          >
            {project.project_description}
          </p>
        </div>
        <div className="flex flex-col w-full justify-center lg:items-center gap-4 ">
          {project &&
            project.project_icons &&
            project.project_icons.length > 0 && (
              <div
                className={`flex gap-2 p-2 mx-auto md:p-4 ${
                  projectsDesign == "Design 1" ? "md:gap-2 " : "lg:gap-1 "
                }`}
              >
                {[0, 1, 2, 3, 4].map((iconIndex) => {
                  const icon = project.project_icons[iconIndex];
                  if (!icon || icon.name === "-") {
                    return null;
                  }

                  return (
                    <Image
                      key={iconIndex}
                      quality={40}
                      width={32}
                      height={32}
                      src={`https://go-skill-icons.vercel.app/api/icons?i=${icon.name}&theme=${iconBg}`}
                      alt={icon.name || ""}
                      className="h-full object-cover w-11 lg:w-full"
                    />
                  );
                })}
              </div>
            )}
          <div className="flex gap-2 justify-between w-full">
            {project.project_link_1_url && project.project_link_1_text && (
              <a
                href={project.project_link_1_url}
                target="_blank"
                className="w-full"
              >
                <button
                  className={`py-2 flex w-full items-center justify-center gap-1 px-2 ${
                    bgColorVariantsPrimary[palette]
                  } ${getPrimaryTextColor(
                    palette
                  )} transition-all md:text-lg rounded-lg shadow-custom-sm font-medium ${
                    fontVariants[fontPrimary]
                  }`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="max-w-8">
                    {selectedIcon1 &&
                      selectedIcon1.value != "-" &&
                      selectedIcon1.icon}
                  </div>
                  &nbsp;
                  {project.project_link_1_text}
                </button>
              </a>
            )}
            {project.project_link_2_url && project.project_link_2_text && (
              <a
                href={project.project_link_2_url}
                target="_blank"
                className="w-full"
              >
                <button
                  className={`py-2 hover:none flex w-full items-center justify-center gap-1 px-2 ${
                    bgColorVariantsSecondary[palette]
                  } ${getSecondaryTextColor(
                    palette
                  )} transition-all md:text-lg rounded-lg font-medium ${
                    fontVariants[fontPrimary]
                  }`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="max-w-8">
                    {selectedIcon2 &&
                      selectedIcon2.value != "-" &&
                      selectedIcon2.icon}
                  </div>
                  &nbsp;
                  {project.project_link_2_text}
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
