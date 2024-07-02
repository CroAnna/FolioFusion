import React, { useContext } from "react";
import { PortfolioContext } from "./PortfolioProvider";
import PortfolioHero from "./PortfolioHero";
import PortfolioProjects from "./PortfolioProjects";
import PortfolioEducation from "./PortfolioEducation";

const RenderedPortfolio = () => {
  const { portfolioStackContextData, portfolioStackProjectsContextData } =
    useContext(PortfolioContext);

  return (
    <div className="overflow-y-scroll h-screen">
      <p className="max-w-6xl break-words">
        {JSON.stringify(portfolioStackContextData)}
        {JSON.stringify(portfolioStackProjectsContextData)}
      </p>
      <PortfolioHero />
      <PortfolioProjects />
      <PortfolioEducation />
    </div>
  );
};

export default RenderedPortfolio;
