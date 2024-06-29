import React, { useContext } from "react";
import { PortfolioContext } from "./PortfolioProvider";

const PortfolioWork = () => {
  const { portfolioStackContextData } = useContext(PortfolioContext);

  return (
    <div className="max-w-screen-lg px-2 mx-auto pt-16 flex flex-col gap-6">
      <h3 className="uppercase text-xl font-medium">
        {portfolioStackContextData.work_title}
      </h3>
      <p className="text-xl font-bold max-w-xs">
        {portfolioStackContextData.work_description}
      </p>
    </div>
  );
};

export default PortfolioWork;
