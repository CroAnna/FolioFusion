import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const NextPreviousNavigation = ({
  previousUrl = null,
  nextUrl = null,
  handleNextClick = () => {},
}) => {
  const router = useRouter();

  const handleClick = async () => {
    event.preventDefault();
    await handleNextClick();
    router.push(nextUrl);
  };

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
        <button
          className="join-item btn btn-secondary w-full"
          onClick={handleClick}
        >
          {/* TODO add loader while saving data and then redirect */}
          Next (+ save)
        </button>
      )}
    </div>
  );
};

export default NextPreviousNavigation;
