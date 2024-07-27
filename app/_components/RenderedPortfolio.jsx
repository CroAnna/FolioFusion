import React, { useContext } from "react";
import { PortfolioContext } from "./PortfolioProvider";
import PortfolioHero from "./PortfolioHero";
import PortfolioProjects from "./PortfolioProjects";
import PortfolioEducation from "./PortfolioEducation";
import PortfolioActivities from "./PortfolioActivities";

const RenderedPortfolio = () => {
  const {
    portfolioStackContextData,
    portfolioStackProjectsContextData,
    portfolioStackExperienceContextData,
    portfolioStackActivityContextData,
  } = useContext(PortfolioContext);

  return (
    <div className="overflow-y-scroll h-screen">
      <p className="max-w-6xl break-words">
        {JSON.stringify(portfolioStackContextData)}
        {JSON.stringify(portfolioStackProjectsContextData)}
        {JSON.stringify(portfolioStackExperienceContextData)}
        {JSON.stringify(portfolioStackActivityContextData)}
      </p>
      <PortfolioHero />
      <PortfolioProjects />
      <PortfolioEducation />
      <PortfolioActivities />
    </div>
  );
};

export default RenderedPortfolio;
