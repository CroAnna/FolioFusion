"use client";
import PortfolioMaker from "@/components/PortfolioMaker";
import RenderedPortfolio from "@/components/RenderedPortfolio";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function BuilderLayout({ children }) {
  const [portfolioStack, setPortfolioStack] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const pathname = usePathname();

  useEffect(() => {
    console.log("next page " + pathname);
    if (pathname == "/builder/create-hero") {
      setCurrentStep(1);
    } else if (pathname == "/builder/add-work") {
      setCurrentStep(2);
    } else if (pathname == "/builder/add-education") {
      setCurrentStep(3);
    }
  }, [pathname]);

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
