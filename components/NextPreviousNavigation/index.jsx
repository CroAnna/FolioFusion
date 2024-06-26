import Link from "next/link";
import React from "react";

const NextPreviousNavigation = ({ previousUrl = null, nextUrl = null }) => {
  return (
    <div className="join grid grid-cols-2">
      {previousUrl && (
        <Link href={previousUrl} className="w-full">
          <button className="join-item btn btn-outline bg-white w-full">
            Previous page
          </button>
        </Link>
      )}
      {nextUrl && (
        <Link href={nextUrl}>
          <button className="join-item btn btn-outline bg-primary w-full">
            Next
          </button>
        </Link>
      )}
    </div>
  );
};

export default NextPreviousNavigation;
