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
        src="/low-poly-grid-1.svg"
        alt=""
        fill
        className="w-full h-auto object-cover top-0 left-0 right-0 bottom-0"
      />
      <div className="z-10 max-w-screen-lg px-2 mx-auto gap-6 grid grid-cols-3">
        {portfolioStackActivityContextData.map((el, index) => (
          <ActivityCard palette={palette} key={index} data={el} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioActivities;
