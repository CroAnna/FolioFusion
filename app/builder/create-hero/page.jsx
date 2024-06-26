import NextPreviousNavigation from "@/components/NextPreviousNavigation";
import Link from "next/link";
import React from "react";

const CreateHero = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">1. Create hero</h2>
      <NextPreviousNavigation nextUrl={"/builder/add-work"} />
    </div>
  );
};

export default CreateHero;
