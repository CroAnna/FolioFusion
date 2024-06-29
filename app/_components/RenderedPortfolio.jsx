import React, { useContext } from "react";
import { PortfolioContext } from "./PortfolioProvider";
import PortfolioHero from "./PortfolioHero";
import PortfolioWork from "./PortfolioWork";

const RenderedPortfolio = () => {
  const { portfolioStackContextData } = useContext(PortfolioContext);

  return (
    <div className="overflow-y-scroll h-screen">
      <p className="max-w-6xl break-words">
        {JSON.stringify(portfolioStackContextData)}
      </p>
      <PortfolioHero />
      <PortfolioWork />
    </div>
  );
};

export default RenderedPortfolio;
