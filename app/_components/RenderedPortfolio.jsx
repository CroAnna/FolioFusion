import React, { useContext } from "react";
import { PortfolioContext } from "./PortfolioProvider";
import PortfolioHero from "./PortfolioHero";

const RenderedPortfolio = () => {
  return (
    <div>
      {/* <p>{JSON.stringify(portfolioStackContextData)}</p> */}
      <PortfolioHero />
    </div>
  );
};

export default RenderedPortfolio;
