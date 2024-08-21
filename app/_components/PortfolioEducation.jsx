import React, { useContext, useEffect } from "react";
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
import { useRouter } from "next/navigation";

const PortfolioEducation = () => {
  const router = useRouter();
  const {
    portfolioStackHeroContextData,
    portfolioStackExperienceContextData,
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
      className={`w-full pb-8
        ${getBgColor(palette)} ${getPrimaryTextColor(palette)}`}
    >
      <div
        className={`max-w-screen-lg px-4 md:px-2 mx-auto pt-16 flex flex-col gap-6 `}
      >
        <h3
          className={`uppercase text-xl font-medium tracking-wider font-${fontPrimary} ${getPrimaryColors(
            palette
          )}`}
        >
          {portfolioStackHeroContextData.experience_group_title}
        </h3>
        <p className={`text-xl font-bold max-w-xs font-${fontPrimary}`}>
          {portfolioStackHeroContextData.experience_group_description}
        </p>
        {portfolioStackExperienceContextData.length > 0 && (
          <VerticalTimeline
            lineColor={getHexLineColor(palette)}
            layout={portfolioStackBasicContextData.experience_alignment}
          >
            {portfolioStackExperienceContextData.map((el, index) => (
              <TimelineElement
                palette={palette}
                fontPrimary={fontPrimary}
                key={index}
                data={el}
              />
            ))}
          </VerticalTimeline>
        )}
      </div>
    </div>
  );
};

export default PortfolioEducation;
