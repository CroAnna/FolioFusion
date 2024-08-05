import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import loadingGif from "@/public/loading.gif";
import Image from "next/image";

const NextPreviousNavigation = ({
  previousUrl = null,
  nextUrl = null,
  handleNextClick = () => {},
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleClick = async () => {
    setIsLoading(true);
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
          {isLoading ? (
            <>
              <Image src={loadingGif} width={24} height={24} />
              <p>Saving...</p>
            </>
          ) : (
            <p>Next (+save)</p>
          )}
        </button>
      )}
    </div>
  );
};

export default NextPreviousNavigation;
