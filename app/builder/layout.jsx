"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import RenderedPortfolio from "../_components/RenderedPortfolio";
import PortfolioMaker from "../_components/PortfolioMaker";
import { stepsData } from "../_libs/utils";
import Steps from "../_components/Steps";

export default function BuilderLayout({ children }) {
  const [currentStep, setCurrentStep] = useState(1);
  const pathname = usePathname();

  useEffect(() => {
    console.log("next page " + pathname);
    if (pathname == "/builder/create-hero") {
      setCurrentStep(1);
    } else if (pathname == "/builder/add-projects") {
      setCurrentStep(2);
    } else if (pathname == "/builder/add-education") {
      setCurrentStep(3);
    } else if (pathname == "/builder/add-activities") {
      setCurrentStep(4);
    }
  }, [pathname]);

  return (
    <>
      <div className="flex-1"></div>
      <div className="flex w-full">
        <div className="flex-2">
          <Steps currentStep={currentStep} stepsData={stepsData} />
          <PortfolioMaker currentStep={currentStep}>{children}</PortfolioMaker>
        </div>
        <div className="flex-3 w-full">
          <RenderedPortfolio />
        </div>
      </div>
    </>
  );
}
