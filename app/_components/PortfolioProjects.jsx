import React, { useContext, useEffect } from "react";
import { PortfolioContext } from "./PortfolioProvider";
import {
  getBgColor,
  getPrimaryColors,
  getPrimaryTextColor,
} from "../_libs/utils";
import ProjectCard from "./ProjectCard";
import { useRouter } from "next/navigation";

const PortfolioProjects = () => {
  const router = useRouter();
  const {
    portfolioStackHeroContextData,
    portfolioStackProjectsContextData,
    portfolioStackBasicContextData,
  } = useContext(PortfolioContext);
  const palette = portfolioStackBasicContextData.portfolio_palette;
  const fontPrimary = portfolioStackBasicContextData.portfolio_font_primary;

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
        className={`max-w-screen-lg px-4 pb-2 md:px-2 mx-auto pt-16 flex flex-col gap-6`}
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
