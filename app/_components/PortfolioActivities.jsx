import Image from "next/image";
import React, { useContext, useEffect } from "react";
import ActivityCard from "./ActivityCard";
import { PortfolioContext } from "./PortfolioProvider";
import { useRouter } from "next/navigation";

const PortfolioActivities = () => {
  const router = useRouter();
  const {
    portfolioStackHeroContextData,
    portfolioStackActivityContextData,
    portfolioStackBasicContextData,
  } = useContext(PortfolioContext);
  const palette = portfolioStackBasicContextData.portfolio_palette;
  const fontPrimary = portfolioStackBasicContextData.portfolio_font_primary;
  const activitiesDesign = portfolioStackBasicContextData.activities_design;

  useEffect(() => {
    if (!portfolioStackHeroContextData.id) {
      router.push("/builder/create-hero", undefined, { shallow: true });
    }
  }, [portfolioStackHeroContextData]);

  return (
    <div className="relative z-0">
      <Image
        src={`/${
          portfolioStackHeroContextData.activity_bg_shape
        }-${palette.slice(-1)}.svg`}
        alt=""
        fill
        className="w-full h-auto object-cover top-0 left-0 right-0 bottom-0"
      />
      <div
        className={`z-10 max-w-screen-lg px-2 mx-auto flex flex-col py-16 
          ${
            activitiesDesign == "Design 1"
              ? "md:grid md:grid-cols-3 gap-12 lg:gap-8"
              : activitiesDesign == "Design 2"
              ? "md:grid md:grid-cols-2 gap-12"
              : activitiesDesign == "Design 3"
              ? "md:grid md:grid-cols-2 gap-12"
              : activitiesDesign == "Design 4" && "gap-12 lg:gap-8 p-8"
          }`}
      >
        {portfolioStackActivityContextData &&
          portfolioStackActivityContextData
            .slice()
            .reverse()
            .map((el, index) => (
              <ActivityCard
                fontPrimary={fontPrimary}
                palette={palette}
                key={index}
                data={el}
                activityIndex={
                  // to show newest items first, on top, and latest on the bottom
                  portfolioStackActivityContextData.length - index - 1
                }
                activitiesDesign={activitiesDesign}
              />
            ))}
      </div>
    </div>
  );
};

export default PortfolioActivities;
