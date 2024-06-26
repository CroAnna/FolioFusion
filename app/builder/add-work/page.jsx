import NextPreviousNavigation from "@/components/NextPreviousNavigation";
import Link from "next/link";
import React from "react";

const AddWork = () => {
  return (
    <div className="w-full flex flex-col">
      <h2 className="text-2xl font-bold">
        2. Add work experience and your projects
      </h2>
      <NextPreviousNavigation
        nextUrl={"/builder/add-education"}
        previousUrl={"/builder/create-hero"}
      />
    </div>
  );
};

export default AddWork;
