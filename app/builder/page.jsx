"use client";
import PortfolioMaker from "@/components/PortfolioMaker";
import RenderedPortfolio from "@/components/RenderedPortfolio";
import { useState } from "react";

const BuilderPage = () => {
  const [portfolioStack, setPortfolioStack] = useState(null);

  return (
    <div className="grid grid-cols-2">
      <PortfolioMaker
        portfolioStack={portfolioStack}
        setPortfolioStack={setPortfolioStack}
      />
      <RenderedPortfolio portfolioStack={portfolioStack} />
    </div>
  );
};

export default BuilderPage;
