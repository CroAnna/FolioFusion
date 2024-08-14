"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ReactGA from "react-ga4";
import { usePathname } from "next/navigation";
import { useCookies } from "react-cookie";

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(["cookie_consent"]);
  const [showBanner, setShowBanner] = useState(false); // next crashes without this, some weird error div in div between rendering
  const pathname = usePathname();

  useEffect(() => {
    if (cookies.cookie_consent === "accepted") {
      ReactGA.send({
        hitType: "pageview",
        page: pathname,
        title: `Pathname: ${pathname}`,
      });
    }
  }, [pathname, cookies.cookie_consent]);

  useEffect(() => {
    const consentCookie = cookies.cookie_consent;

    if (!consentCookie) {
      setShowBanner(true);
    }
  }, [cookies.cookie_consent]);

  const handleAccept = () => {
    setShowBanner(false);
    setCookie("cookie_consent", "accepted");
  };

  const handleReject = () => {
    setShowBanner(false);
    setCookie("cookie_consent", "rejected");
  };

  const initializeGoogleAnalytics = () => {
    ReactGA.initialize("G-BD4KXGKJ9E");
  };

  useEffect(() => {
    if (cookies.cookie_consent === "accepted") {
      initializeGoogleAnalytics();
    } else {
      // console.log("nisu prihvaceni");
    }
  }, [cookies.cookie_consent]);

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 right-0 w-full p-8 bg-cyan-300 shadow-2xl z-30 rounded-t-lg md:rounded-t-none md:rounded-l-3xl md:bottom-12 md:max-w-md  flex flex-col gap-4">
      <h2 className="text-4xl font-extrabold text-gray-800">
        Why do we use 🍪?
      </h2>
      <p className="text-gray-800 font-medium text-base leading-6">
        We use only basic cookies to get more general info about our visitors.
        You can learn more about how we use that data in our{" "}
        <Link href="/privacy-policy" className="underline">
          Privacy policy
        </Link>
        . By accepting we will only enable a Google Analytics cookie to be set.
      </p>
      <div className="flex gap-4 max-w-sm">
        <button
          className="btn bg-cyan-700 text-neutral-100 text-lg border-0 hover:bg-cyan-900 py-2 px-8 rounded-full"
          onClick={handleAccept}
        >
          Accept all
        </button>
        <button
          className="btn btn-outline bg-cyan-300 hover:bg-cyan-200 border-2
           border-neutral-700 hover:border-neutral-800 text-neutral-700 text-lg py-2 px-4 rounded-full"
          onClick={handleReject}
        >
          Only necessary
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
