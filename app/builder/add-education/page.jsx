import Link from "next/link";
import React from "react";

const AddEducation = () => {
  return (
    <div>
      AddEducation
      <Link href="/builder/add-other">
        <button className="btn btn-primary">Next step</button>
      </Link>
    </div>
  );
};

export default AddEducation;
