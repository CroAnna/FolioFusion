"use client";
import PortfolioMaker from "@/components/PortfolioMaker";
import RenderedPortfolio from "@/components/RenderedPortfolio";
import { useState } from "react";

export default function BuilderLayout({ children }) {
  const [portfolioStack, setPortfolioStack] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      <div className="flex-1"></div>
      <div className="grid grid-cols-2">
        <PortfolioMaker
          portfolioStack={portfolioStack}
          setPortfolioStack={setPortfolioStack}
          currentStep={currentStep}
        >
          {children}
        </PortfolioMaker>
        <RenderedPortfolio portfolioStack={portfolioStack} />
      </div>
    </>
  );
}
