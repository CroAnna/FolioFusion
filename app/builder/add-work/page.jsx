import Link from "next/link";
import React from "react";

const AddWork = () => {
  return (
    <div>
      AddWork
      <Link href="/builder/add-education">
        <button className="btn btn-primary">Next step</button>
      </Link>
    </div>
  );
};

export default AddWork;
