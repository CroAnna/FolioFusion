import Link from "next/link";
import React from "react";

const Steps = ({ currentStep, stepsData }) => {
  const getPageUrl = (index) => {
    if (index == 0) {
      return "/builder/create-hero";
    } else if (index == 1) {
      return "/builder/add-projects";
    } else if (index == 2) {
      return "/builder/add-education";
    } else if (index == 3) {
      return "/builder/add-activities";
    }
  };

  return (
    <ul className="steps">
      {stepsData.map((el, index) => (
        <li
          key={index}
          className={`step ${currentStep >= index + 1 && "step-primary"}`}
        >
          <Link href={`${getPageUrl(index)}`}>{el.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Steps;
