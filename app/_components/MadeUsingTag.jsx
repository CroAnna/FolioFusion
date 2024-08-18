import Image from "next/image";
import logo from "@/public/app-logo-192.png";
import { PortfolioContext } from "./PortfolioProvider";
import { useContext } from "react";
import {
  getBgColor,
  getPrimaryBgColors,
  getPrimaryTextColor,
  getSecondaryBgColors,
} from "../_libs/utils";
import Link from "next/link";

const MadeUsingTag = () => {
  const { portfolioStackBasicContextData } = useContext(PortfolioContext);
  const palette = portfolioStackBasicContextData.portfolio_palette;

  return (
    <Link
      href="https://foliofusion.art/"
      target="_blank"
      className={`absolute flex m-auto w-fit left-0 right-0 bottom-2 md:bottom-12 mx-auto py-1 md:py-2 px-2 md:px-4 rounded-lg 
        ${getSecondaryBgColors(
          palette
        )} hover:rotate-2 hover:scale-110 duration-500 md:text-base text-sm
       ${getPrimaryTextColor(palette)}`}
    >
      Made using&nbsp;<span className="underline">FolioFusion</span>
      <Image
        quality={40}
        src={logo}
        width={24}
        height={24}
        alt="spinner"
        className="ml-1"
      />
    </Link>
  );
};

export default MadeUsingTag;
