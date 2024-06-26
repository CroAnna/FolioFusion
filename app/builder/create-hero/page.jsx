import Link from "next/link";
import React from "react";

const CreateHero = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">1. Create hero</h2>
      <Link href="/builder/add-work">
        <button className="btn btn-primary">Next step</button>
      </Link>
    </div>
  );
};

export default CreateHero;
