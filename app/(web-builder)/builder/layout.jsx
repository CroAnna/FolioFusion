"use client";
import { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import RenderedPortfolio from "../../_components/RenderedPortfolio";
import PortfolioMaker from "../../_components/PortfolioMaker";
import { stepsData } from "../../_libs/utils";
import Steps from "../../_components/Steps";
import Confetti from "@/app/_components/Confetti";
import { PortfolioContext } from "@/app/_components/PortfolioProvider";

export default function BuilderLayout({ children }) {
  const [currentStep, setCurrentStep] = useState(1);
  const pathname = usePathname();
  const { confettiTriggerState } = useContext(PortfolioContext);

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
    } else if (pathname == "/builder/add-basic-info") {
      setCurrentStep(5);
    } else if (pathname == "/builder/deploy-portfolio") {
      setCurrentStep(6);
    }
  }, [pathname]);

  return (
    <>
      {confettiTriggerState && <Confetti />}
      <div className="flex-1"></div>
      <div className="flex w-full flex-col md:flex-row">
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
