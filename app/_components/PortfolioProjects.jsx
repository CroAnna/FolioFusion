import React, { useContext, useEffect } from "react";
import { PortfolioContext } from "./PortfolioProvider";
import {
  getBgColor,
  getPrimaryColors,
  getPrimaryTextColor,
} from "../_libs/utils";
import ProjectCard from "./ProjectCard";
import { useRouter } from "next/navigation";
import { deepEqual } from "@/utils/common/methods";

const PortfolioProjects = () => {
  const router = useRouter();
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

  const checkIfPortfolioStackProjectsContextDataIsDefault = () => {
    const defaultValue = [
      {
        id: null,
        project_order: 1,
        project_title: "",
        project_description: "",
        project_technology_1_icon: "",
        project_technology_2_icon: "",
        project_technology_3_icon: "",
        project_technology_4_icon: "",
        project_technology_5_icon: "",
        project_link_1_url: "",
        project_link_2_url: "",
        project_link_1_text: "",
        project_link_2_text: "",
        project_link_1_icon: "",
        project_link_2_icon: "",
        project_img: "",
      },
    ];

    return (
      deepEqual(portfolioStackProjectsContextData, defaultValue) ||
      deepEqual(portfolioStackProjectsContextData, [])
    );
  };

  return (
    <div
      className={`w-full 
        ${getBgColor(palette)} ${getPrimaryTextColor(palette)}`}
    >
      <div
        className={`max-w-screen-lg px-4 pb-2 md:px-2 mx-auto pt-16 flex flex-col gap-8`}
      >
        {portfolioStackHeroContextData &&
          portfolioStackHeroContextData.project_group_title && (
            <h3
              className={`uppercase text-xl font-medium tracking-wider font-${fontPrimary} ${getPrimaryColors(
                palette
              )}`}
            >
              {portfolioStackHeroContextData.project_group_title}
            </h3>
          )}
        {portfolioStackHeroContextData &&
          portfolioStackHeroContextData.project_group_description && (
            <p className={`text-xl font-bold max-w-xs font-${fontPrimary}`}>
              {portfolioStackHeroContextData.project_group_description}
            </p>
          )}
        {!checkIfPortfolioStackProjectsContextDataIsDefault() && (
          <div
            className={`flex flex-col w-full gap-10 md:gap-16 ${
              projectsDesign == "Design 2" ||
              projectsDesign == "Design 3" ||
              projectsDesign == "Design 4"
                ? "grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-8"
                : ""
            }`}
          >
            {portfolioStackProjectsContextData.map((el, index) => (
              <ProjectCard
                project={el}
                key={index}
                projectIndex={index}
                projectsDesign={projectsDesign}
                projectsAlignment={projectsAlignment}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioProjects;
