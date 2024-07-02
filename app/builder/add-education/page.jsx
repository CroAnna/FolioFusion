"use client";
import Input from "@/app/_components/Input";
import NextPreviousNavigation from "@/app/_components/NextPreviousNavigation";
import { PortfolioContext } from "@/app/_components/PortfolioProvider";
import React, { useContext } from "react";

const AddEducation = () => {
  const {
    portfolioStackContextData,
    portfolioStackTimelineContextData,
    setPortfolioStackContextData,
    setPortfolioStackTimelineContextData,
  } = useContext(PortfolioContext);

  const handleUpdate = (field, value) => {
    setPortfolioStackContextData({
      ...portfolioStackContextData,
      [field]: value,
    });
  };

  return (
    <div className="p-6 flex flex-col gap-4">
      <h2 className="text-4xl font-bold">3. Add your education</h2>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">3.1. Add section title</h3>
        <Input
          name={"timeline_group_title"}
          value={portfolioStackContextData.timeline_group_title}
          onChange={(e) => {
            handleUpdate("timeline_group_title", e.target.value);
          }}
          placeholder={"My work and education"}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">3.2. Add section description</h3>
        <Input
          name={"timeline_group_description"}
          value={portfolioStackContextData.timeline_group_description}
          onChange={(e) => {
            handleUpdate("timeline_group_description", e.target.value);
          }}
          placeholder={"This is where I have worked."}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <h3 className="text-2xl font-bold">
            2.3. Add your work experience and education
          </h3>
          <p>(from newest to oldest)</p>
        </div>
      </div>
      <NextPreviousNavigation
        nextUrl={"/builder/add-other"}
        previousUrl={"/builder/add-projects"}
      />
    </div>
  );
};

export default AddEducation;
