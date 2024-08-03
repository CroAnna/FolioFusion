import Link from "next/link";
import React from "react";

const Steps = ({ currentStep, stepsData }) => {
  const getPageUrl = (index) => {
    switch (index) {
      case 0:
        return "/builder/create-hero";
      case 1:
        return "/builder/add-projects";
      case 2:
        return "/builder/add-education";
      case 3:
        return "/builder/add-activities";
      case 4:
        return "/builder/deploy-portfolio";
    }
  };

  return (
    <ul className="steps w-full">
      {stepsData.map((el, index) => (
        <li
          key={index}
          className={`step ${currentStep >= index + 1 && "step-primary"}`}
        >
          <Link href={`${getPageUrl(index)}`} className="hidden md:flex">
            {el.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Steps;
