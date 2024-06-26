import NextPreviousNavigation from "@/components/NextPreviousNavigation";
import React from "react";

const AddEducation = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">3. Add your education</h2>
      <NextPreviousNavigation
        nextUrl={"/builder/add-other"}
        previousUrl={"/builder/add-work"}
      />
    </div>
  );
};

export default AddEducation;
