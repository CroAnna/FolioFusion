import Link from "next/link";
import React from "react";

const NextPreviousNavigation = ({
  previousUrl = null,
  nextUrl = null,
  handleNextClick = () => {},
}) => {
  return (
    <div className="join grid grid-cols-2">
      {previousUrl && (
        <Link href={previousUrl} className="w-full">
          <button className="join-item btn btn-outline w-full">
            Previous page
          </button>
        </Link>
      )}
      {nextUrl && (
        <Link href={nextUrl}>
          <button
            className="join-item btn btn-outline bg-accent w-full"
            onClick={handleNextClick()}
          >
            Next
          </button>
        </Link>
      )}
    </div>
  );
};

export default NextPreviousNavigation;
