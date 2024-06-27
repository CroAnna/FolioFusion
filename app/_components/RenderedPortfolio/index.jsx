import React, { useContext } from "react";
import { PortfolioContext } from "../PortfolioProvider";

const RenderedPortfolio = () => {
  const { portfolioStackContextData } = useContext(PortfolioContext);

  return (
    <div>
      RenderedPortfolio
      <p>{JSON.stringify(portfolioStackContextData)}</p>
    </div>
  );
};

export default RenderedPortfolio;
