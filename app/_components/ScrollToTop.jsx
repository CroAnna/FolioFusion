"use client";
import { ArrowCircleUp } from "@phosphor-icons/react/dist/ssr";
import { useCallback, useContext, useEffect, useState } from "react";
import { PortfolioContext } from "./PortfolioProvider";
import { getHexSecondaryBgColor, getPrimaryBgColors } from "../_libs/utils";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { portfolioStackBasicContextData } = useContext(PortfolioContext);
  const palette = portfolioStackBasicContextData.portfolio_palette;

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

  const goToTopSmooth = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-4 z-50 cursor-pointer">
      {showTopBtn ? (
        <ArrowCircleUp
          onClick={goToTopSmooth}
          size={56}
          weight="fill"
          color={`${getHexSecondaryBgColor(palette)}`}
          className={`rounded-full ${getPrimaryBgColors(palette)}`}
        />
      ) : null}
    </div>
  );
};

export default ScrollToTop;
