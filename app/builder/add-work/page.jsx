import NextPreviousNavigation from "@/app/_components/NextPreviousNavigation";
import Link from "next/link";
import React from "react";

const AddWork = () => {
  return (
    <div className="p-6 flex flex-col gap-4">
      <h2 className="text-4xl font-bold">
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
