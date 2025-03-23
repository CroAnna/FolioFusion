import React, { useContext, useEffect, useState } from "react";
import { PortfolioContext } from "./PortfolioProvider";
import {
  bgColorVariantsPrimary,
  fontVariants,
  getBgColor,
  getPrimaryColors,
  getPrimaryTextColor,
} from "../_libs/utils";
import ProjectCard from "./ProjectCard";
import { useRouter } from "next/navigation";

const PortfolioProjects = () => {
  const NUMBER_OF_SHOWN_PROJECTS_BY_DEFAULT = 6;
  const router = useRouter();
  const [areAllProjectsShown, setAreAllProjectsShown] = useState(false);
  const {
    portfolioStackHeroContextData,
    portfolioStackProjectsContextData,
    portfolioStackBasicContextData,
  } = useContext(PortfolioContext);
  const palette = portfolioStackBasicContextData.portfolio_palette;
  const fontPrimary = portfolioStackBasicContextData.portfolio_font_primary;
  const projectsDesign = portfolioStackBasicContextData.projects_design;
  const projectsAlignment = portfolioStackBasicContextData.projects_alignment;

  useEffect(() => {
    if (!portfolioStackHeroContextData.id) {
      router.push("/builder/create-hero", undefined, { shallow: true });
    }
  }, [portfolioStackHeroContextData]);

  return (
    <div
      className={`w-full 
        ${getBgColor(palette)} ${getPrimaryTextColor(palette)}`}
    >
      <div
        className={`max-w-screen-lg px-4 pb-2 md:px-2 mx-auto pt-16 flex flex-col gap-8`}
      >
        <h3
          className={`uppercase text-xl font-medium tracking-wider font-${fontPrimary} ${getPrimaryColors(
            palette
          )}`}
        >
          {portfolioStackHeroContextData.project_group_title}
        </h3>
        <p className={`text-xl font-bold max-w-xs font-${fontPrimary}`}>
          {portfolioStackHeroContextData.project_group_description}
        </p>
        <div
          className={`flex flex-col w-full gap-10 md:gap-16 ${
            projectsDesign == "Design 2" ||
            projectsDesign == "Design 3" ||
            projectsDesign == "Design 4"
              ? "grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-8"
              : ""
          }`}
        >
          {portfolioStackProjectsContextData &&
            portfolioStackProjectsContextData
              .slice(
                0,
                areAllProjectsShown
                  ? portfolioStackProjectsContextData.length
                  : NUMBER_OF_SHOWN_PROJECTS_BY_DEFAULT
              )
              .map((el, index) => (
                <ProjectCard
                  project={el}
                  key={index}
                  projectIndex={index}
                  projectsDesign={projectsDesign}
                  projectsAlignment={projectsAlignment}
                />
              ))}
          {!areAllProjectsShown &&
            portfolioStackProjectsContextData.length >
              NUMBER_OF_SHOWN_PROJECTS_BY_DEFAULT && (
              <button
                className={`py-2 flex w-full items-center justify-center gap-1 px-2 ${
                  bgColorVariantsPrimary[palette]
                } ${getPrimaryTextColor(
                  palette
                )} transition-all md:text-lg rounded-lg shadow-custom-sm font-medium ${
                  fontVariants[fontPrimary]
                }`}
                onClick={() => setAreAllProjectsShown(true)}
              >
                Show all projects
              </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjects;
