"use client";
import PortfolioMaker from "@/app/_components/PortfolioMaker";
import RenderedPortfolio from "@/app/_components/RenderedPortfolio";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function BuilderLayout({ children }) {
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
        <PortfolioMaker currentStep={currentStep}>{children}</PortfolioMaker>
        <RenderedPortfolio />
      </div>
    </>
  );
}
