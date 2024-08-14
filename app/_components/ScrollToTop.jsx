"use client";
import { ArrowCircleUp } from "@phosphor-icons/react/dist/ssr";
import { useContext, useEffect, useState } from "react";
import { PortfolioContext } from "./PortfolioProvider";
import { getHexSecondaryBgColor, getPrimaryBgColors } from "../_libs/utils";
import { usePathname } from "next/navigation";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { portfolioStackBasicContextData } = useContext(PortfolioContext);
  const palette = portfolioStackBasicContextData.portfolio_palette;
  const pathname = usePathname();

  useEffect(() => {
    const totalHeight = document.documentElement.scrollHeight;
    const threshold = 0.3 * totalHeight;

    const handleScroll = () => {
      if (window.scrollY >= threshold) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll, true);
    return window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [pathname]);

  const goToTopSmooth = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const checkIfPathnameDefault = () => {
    if (
      pathname == "/" ||
      pathname == "/send-feedback" ||
      pathname == "/login" ||
      pathname == "/sign-up" ||
      pathname == "/privacy-policy" ||
      pathname.includes("profile")
    ) {
      return true;
    } else {
      return false;
    }
  };

  const checkIfPathnameBuilder = () => {
    if (pathname.includes("builder")) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="fixed bottom-8 right-4 z-50 cursor-pointer">
      {showTopBtn && checkIfPathnameBuilder() == false ? (
        <ArrowCircleUp
          onClick={goToTopSmooth}
          size={56}
          weight="fill"
          color={
            checkIfPathnameDefault()
              ? "#18181b"
              : getHexSecondaryBgColor(palette)
          }
          className={`rounded-full ${
            checkIfPathnameDefault()
              ? "bg-cyan-500"
              : getPrimaryBgColors(palette)
          }`}
        />
      ) : null}
    </div>
  );
};

export default ScrollToTop;
