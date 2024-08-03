import Image from "next/image";
import React, { useContext } from "react";
import ActivityCard from "./ActivityCard";
import { PortfolioContext } from "./PortfolioProvider";

const PortfolioActivities = () => {
  const { portfolioStackContextData, portfolioStackActivityContextData } =
    useContext(PortfolioContext);
  const palette = portfolioStackContextData.hero_palette;

  return (
    <div className="relative z-0">
      <Image
        src={`/${portfolioStackContextData.activity_bg_shape}-${palette.slice(
          -1
        )}.svg`}
        // dodaj da se mijenjaju i biraju slike, dizajni slika https://app.haikei.app/ i boje prema paleti
        alt=""
        fill
        className="w-full h-auto object-cover top-0 left-0 right-0 bottom-0"
      />
      <div className="z-10 max-w-screen-lg px-2 mx-auto gap-6 flex flex-col md:grid md:grid-cols-3 py-16">
        {portfolioStackActivityContextData.map((el, index) => (
          <ActivityCard
            palette={palette}
            key={index}
            data={el}
            activityIndex={index}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioActivities;
