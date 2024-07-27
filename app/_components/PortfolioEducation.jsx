import React, { useContext } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  getBgColor,
  getPrimaryColors,
  getPrimaryTextColor,
  getHexLineColor,
} from "../_libs/utils";
import { PortfolioContext } from "./PortfolioProvider";
import TimelineElement from "./TimelineElement";

const PortfolioEducation = () => {
  const { portfolioStackContextData, portfolioStackExperienceContextData } =
    useContext(PortfolioContext);
  const palette = portfolioStackContextData.hero_palette;

  return (
    <div
      className={`w-full 
        ${getBgColor(palette)} ${getPrimaryTextColor(palette)}`}
    >
      <div
        className={`max-w-screen-lg px-2 mx-auto pt-16 flex flex-col gap-6 `}
      >
        <h3
          className={`uppercase text-xl font-medium tracking-wider ${getPrimaryColors(
            palette
          )}`}
        >
          {portfolioStackContextData.experience_group_title}
        </h3>
        <p className="text-xl font-bold max-w-xs">
          {portfolioStackContextData.experience_group_description}
        </p>
        {portfolioStackExperienceContextData.length > 0 && (
          <VerticalTimeline lineColor={getHexLineColor(palette)}>
            {portfolioStackExperienceContextData.map((el, index) => (
              <TimelineElement palette={palette} key={index} data={el} />
            ))}
          </VerticalTimeline>
        )}
      </div>
    </div>
  );
};

export default PortfolioEducation;
