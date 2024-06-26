import React from "react";

const Steps = ({ currentStep, stepsData }) => {
  return (
    <ul className="steps">
      {stepsData.map((el, index) => (
        <li
          key={index}
          className={`step ${currentStep >= index + 1 && "step-primary"}`}
        >
          {el.text}
        </li>
      ))}
    </ul>
  );
};

export default Steps;
