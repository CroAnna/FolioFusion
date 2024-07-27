"use client";
import React, { useContext, useEffect } from "react";
import { PortfolioContext } from "./PortfolioProvider";
import PortfolioHero from "./PortfolioHero";
import PortfolioProjects from "./PortfolioProjects";
import PortfolioEducation from "./PortfolioEducation";
import PortfolioActivities from "./PortfolioActivities";
import { getDataByDomain } from "./actions";

const RenderedPortfolio = ({ domain = null }) => {
  const {
    portfolioStackContextData,
    portfolioStackProjectsContextData,
    portfolioStackExperienceContextData,
    portfolioStackActivityContextData,
    setPortfolioStackContextData,
    setPortfolioStackExperienceContextData,
    setPortfolioStackProjectsContextData,
    setPortfolioStackActivityContextData,
  } = useContext(PortfolioContext);

  useEffect(() => {
    if (domain) {
      // it's deployed portfolio
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    const data = await getDataByDomain(domain);
    console.log(data);
    setPortfolioStackContextData(data.portfolio);
    setPortfolioStackProjectsContextData(data.projects);
    setPortfolioStackActivityContextData(data.activities);
    setPortfolioStackExperienceContextData(data.experiences);
  };

  return (
    <div className="overflow-y-scroll h-screen">
      <p className="max-w-6xl break-words">
        {JSON.stringify(portfolioStackContextData)}
        {JSON.stringify(portfolioStackProjectsContextData)}
        {JSON.stringify(portfolioStackExperienceContextData)}
        {JSON.stringify(portfolioStackActivityContextData)}
      </p>
      {portfolioStackContextData && <PortfolioHero />}
      {portfolioStackProjectsContextData && <PortfolioProjects />}
      {portfolioStackExperienceContextData && <PortfolioEducation />}
      {portfolioStackActivityContextData && <PortfolioActivities />}
    </div>
  );
};

export default RenderedPortfolio;
