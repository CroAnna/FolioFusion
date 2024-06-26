import React from "react";
import Steps from "../Steps";

const PortfolioMaker = ({ portfolioStack, setPortfolioStack }) => {
  const stepsData = [
    {
      text: "Create hero",
    },
    { text: "Add work/projects" },
    { text: "Add education" },
    { text: "Add other info" },
    { text: "Deploy or download as PDF" },
  ];

  return (
    <div>
      <h2>Create your portfolio</h2>
      <Steps currentStep={3} stepsData={stepsData} />
      <button className="btn btn-neutral">Neutral</button>
    </div>
  );
};

export default PortfolioMaker;
