import React from "react";
import Steps from "../Steps";
import { stepsData } from "@/utils/data";

const PortfolioMaker = ({ currentStep, children }) => {
  return (
    <div>
      <Steps currentStep={currentStep} stepsData={stepsData} />
      {children}
    </div>
  );
};

export default PortfolioMaker;
