import React, { useContext } from "react";
import { PortfolioContext } from "./PortfolioProvider";
import {
  getBgColor,
  getPrimaryBorderColors,
  getPrimaryColors,
  getSecondaryColors,
} from "../_libs/utils";

const PortfolioWork = () => {
  const { portfolioStackContextData } = useContext(PortfolioContext);
  const palette = portfolioStackContextData.hero_palette;

  return (
    <div className={`w-full ${getBgColor(palette)}`}>
      <div
        className={`max-w-screen-lg px-2 mx-auto pt-16 flex flex-col gap-6 `}
      >
        <h3 className={`uppercase text-xl font-medium ${getPrimaryColors(palette)}`}>
          {portfolioStackContextData.work_title}
        </h3>
        <p className="text-xl font-bold max-w-xs">
          {portfolioStackContextData.work_description}
        </p>
      </div>
    </div>
  );
};

export default PortfolioWork;
