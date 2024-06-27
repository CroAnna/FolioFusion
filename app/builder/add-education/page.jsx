import NextPreviousNavigation from "@/app/_components/NextPreviousNavigation";
import React from "react";

const AddEducation = () => {
  return (
    <div className="p-6 flex flex-col gap-4">
      <h2 className="text-4xl font-bold">3. Add your education</h2>
      <NextPreviousNavigation
        nextUrl={"/builder/add-other"}
        previousUrl={"/builder/add-work"}
      />
    </div>
  );
};

export default AddEducation;
