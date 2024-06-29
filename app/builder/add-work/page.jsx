"use client";
import Input from "@/app/_components/Input";
import NextPreviousNavigation from "@/app/_components/NextPreviousNavigation";
import { PortfolioContext } from "@/app/_components/PortfolioProvider";
import React, { useContext } from "react";

const AddWork = () => {
  const { portfolioStackContextData, setPortfolioStackContextData } =
    useContext(PortfolioContext);

  const handleUpdate = (field, value) => {
    setPortfolioStackContextData({
      ...portfolioStackContextData,
      [field]: value,
    });
  };

  return (
    <div className="p-6 flex flex-col gap-8">
      <h2 className="text-4xl font-bold">
        2. Add work experience and your projects
      </h2>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">2.1. Add section title</h3>
        <Input
          name={"work_title"}
          onChange={(e) => {
            handleUpdate("work_title", e.target.value);
          }}
          placeholder={"My projects / Work"}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">2.1. Add section description</h3>
        <Input
          name={"work_description"}
          onChange={(e) => {
            handleUpdate("work_description", e.target.value);
          }}
          placeholder={"This is what I have done."}
        />
      </div>
      <NextPreviousNavigation
        nextUrl={"/builder/add-education"}
        previousUrl={"/builder/create-hero"}
      />
    </div>
  );
};

export default AddWork;
