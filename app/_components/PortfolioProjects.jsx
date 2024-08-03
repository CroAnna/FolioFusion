import React, { useContext } from "react";
import { PortfolioContext } from "./PortfolioProvider";
import {
  getBgColor,
  getPrimaryColors,
  getPrimaryTextColor,
} from "../_libs/utils";
import ProjectCard from "./ProjectCard";

const PortfolioProjects = () => {
  const { portfolioStackContextData, portfolioStackProjectsContextData } =
    useContext(PortfolioContext);
  const palette = portfolioStackContextData.hero_palette;

  return (
    <div
      className={`w-full 
        ${getBgColor(palette)} ${getPrimaryTextColor(palette)}`}
    >
      <div
        className={`max-w-screen-lg px-4 pb-2 md:px-2 mx-auto pt-16 flex flex-col gap-6`}
      >
        <h3
          className={`uppercase text-xl font-medium tracking-wider ${getPrimaryColors(
            palette
          )}`}
        >
          {portfolioStackContextData.project_group_title}
        </h3>
        <p className="text-xl font-bold max-w-xs">
          {portfolioStackContextData.project_group_description}
        </p>
        <div className="flex flex-col gap-10 md:gap-16 ">
          {portfolioStackProjectsContextData.map((el, index) => (
            <ProjectCard project={el} key={index} projectIndex={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjects;
