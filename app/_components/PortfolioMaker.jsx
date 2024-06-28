import React from "react";
import { stepsData } from "@/app/_libs/utils";
import Steps from "./Steps";

const PortfolioMaker = ({ currentStep, children }) => {
  return (
    <div>
      <Steps currentStep={currentStep} stepsData={stepsData} />
      {children}
    </div>
  );
};

export default PortfolioMaker;
