import Image from "next/image";
import { useContext } from "react";
import { PortfolioContext } from "./PortfolioProvider";
import {
  DribbbleLogo,
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TiktokLogo,
  XLogo,
  YoutubeLogo,
  Link as LinkLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const PortfolioHero = () => {
  const { portfolioStackContextData } = useContext(PortfolioContext);
  const border_style = portfolioStackContextData.hero_border_style;
  const palette = portfolioStackContextData.hero_palette;
  const extra_style_elements =
    portfolioStackContextData.hero_extra_style_elements;

  const bgColors = `
        ${palette == "Palette 1" && "bg-zinc-100 text-gray-600"} 
        ${palette == "Palette 4" && "bg-slate-800 text-gray-50"} 
        ${palette == "Palette 3" && "bg-orange-50 text-amber-900"} 
        ${palette == "Palette 2" && "bg-sky-50 text-gray-800"} 
        ${palette == "Palette 5" && "bg-neutral-900 text-gray-100"}
        ${palette == "Palette 6" && "bg-stone-900 text-gray-100"}`;

  const primaryBorderColors = `
        ${palette == "Palette 1" && "border-cyan-900"} 
        ${palette == "Palette 2" && "border-cyan-900"}
        ${palette == "Palette 3" && "border-lime-800"} 
        ${palette == "Palette 4" && "border-amber-200 "} 
        ${palette == "Palette 5" && "border-emerald-500"} 
        ${palette == "Palette 6" && "border-orange-500"}`;

  const primaryColors = `
        ${palette == "Palette 1" && "text-amber-600"} 
        ${palette == "Palette 2" && "text-blue-800"} 
        ${palette == "Palette 3" && "text-orange-800"} 
        ${palette == "Palette 4" && "text-yellow-400"} 
        ${palette == "Palette 5" && "text-lime-500"}
        ${palette == "Palette 6" && "text-yellow-400"}`;

  const secondaryColors = `
        ${palette == "Palette 1" && "text-cyan-900"} 
        ${palette == "Palette 2" && "text-cyan-900"}
        ${palette == "Palette 3" && "text-lime-800"} 
        ${palette == "Palette 4" && "text-amber-200 "} 
        ${palette == "Palette 5" && "text-emerald-500"}  
        ${palette == "Palette 6" && "text-orange-500"}`;

  return (
    <div
      className={`hero min-h-screen w-full relative flex flex-col gap-4 justify-center ${bgColors}`}
    >
      {portfolioStackContextData.hero_extra && (
        <>
          <Image
            src={
              palette == "Palette 1"
                ? extra_style_elements == "abstract"
                  ? `/detail-1-blue.png`
                  : extra_style_elements == "dots" && `/dots-blue.png`
                : palette == "Palette 2"
                ? extra_style_elements == "abstract"
                  ? `/detail-1-blue.png`
                  : extra_style_elements == "dots" && `/dots-blue.png`
                : palette == "Palette 3"
                ? extra_style_elements == "abstract"
                  ? `/detail-1-green.png`
                  : extra_style_elements == "dots" && `/dots-green.png`
                : palette == "Palette 4"
                ? extra_style_elements == "abstract"
                  ? `/detail-1-yellow.png`
                  : extra_style_elements == "dots" && `/dots-yellow.png`
                : palette == "Palette 5"
                ? extra_style_elements == "abstract"
                  ? `/detail-1-emerald.png`
                  : extra_style_elements == "dots" && `/dots-emerald.png`
                : palette == "Palette 6" && extra_style_elements == "abstract"
                ? `/detail-1-orange.png`
                : extra_style_elements == "dots" && `/dots-yellow.png`
            }
            alt={""}
            width="360"
            height="360"
            className={`absolute left-0 ${
              extra_style_elements == "abstract" ? "bottom-0" : "bottom-8"
            }`}
          />
          <Image
            src={
              palette == "Palette 1"
                ? extra_style_elements == "abstract"
                  ? `/detail-2-orange.png`
                  : extra_style_elements == "dots" && `/dots-long-orange.png`
                : palette == "Palette 2"
                ? extra_style_elements == "abstract"
                  ? `/detail-2-blue.png`
                  : extra_style_elements == "dots" && `/dots-long-blue.png`
                : palette == "Palette 3"
                ? extra_style_elements == "abstract"
                  ? `/detail-2-brown.png`
                  : extra_style_elements == "dots" && `/dots-long-brown.png`
                : palette == "Palette 4"
                ? extra_style_elements == "abstract"
                  ? `/detail-2-yellow.png`
                  : extra_style_elements == "dots" && `/dots-long-yellow.png`
                : palette == "Palette 5"
                ? extra_style_elements == "abstract"
                  ? `/detail-2-lime.png`
                  : extra_style_elements == "dots" && `/dots-long-lime.png`
                : palette == "Palette 6" && extra_style_elements == "abstract"
                ? `/detail-2-yellow.png`
                : extra_style_elements == "dots" && `/dots-long-yellow.png`
            }
            alt={""}
            width="360"
            height="320"
            className="absolute right-0 top-0"
          />
        </>
      )}
      <div className={`hero-content rounded-full`}>
        {portfolioStackContextData.hero_image && (
          <div
            className={`max-w-xs inline-block 
            ${
              portfolioStackContextData.hero_image_rounded
                ? "rounded-full"
                : "rounded-lg"
            } 
          ${
            portfolioStackContextData.hero_image_border &&
            `border-4 ${
              border_style == "dashed"
                ? "border-dashed"
                : border_style == "solid"
                ? "border-solid"
                : border_style == "dotted"
                ? "border-dotted"
                : "border-double"
            } p-4 ${primaryBorderColors}`
          }`}
          >
            <Image
              width={320}
              height={320}
              src={portfolioStackContextData.hero_image}
              alt=""
              className={`${
                portfolioStackContextData.hero_image_rounded
                  ? "rounded-full"
                  : "rounded-lg"
              } w-full h-full`}
            />
          </div>
        )}
        <div className="flex flex-col gap-4">
          <p className="py-0 text-lg">
            {portfolioStackContextData.hero_welcome}
          </p>
          <div>
            <h1
              className={`text-8xl font-bold break-words max-w-[680px]
                ${primaryColors}`}
            >
              {portfolioStackContextData.hero_name}
            </h1>
            <h2
              className={`text-5xl font-bold 
              ${secondaryColors}`}
            >
              {portfolioStackContextData.hero_short}
            </h2>
          </div>
          <p className="py-4 text-lg max-w-xl">
            {portfolioStackContextData.hero_description}
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        {portfolioStackContextData.social_github && (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={portfolioStackContextData.social_github}
            className={primaryColors}
          >
            <GithubLogo size={36} weight="duotone" />
          </Link>
        )}
        {portfolioStackContextData.social_linkedin && (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={portfolioStackContextData.social_linkedin}
            className={primaryColors}
          >
            <LinkedinLogo size={36} weight="duotone" />
          </Link>
        )}
        {portfolioStackContextData.social_x && (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={portfolioStackContextData.social_x}
            className={primaryColors}
          >
            <XLogo size={36} weight="duotone" />
          </Link>
        )}
        {portfolioStackContextData.social_facebook && (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={portfolioStackContextData.social_facebook}
            className={primaryColors}
          >
            <FacebookLogo size={36} weight="duotone" />
          </Link>
        )}
        {portfolioStackContextData.social_instagram && (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={portfolioStackContextData.social_instagram}
            className={primaryColors}
          >
            <InstagramLogo size={36} weight="duotone" />
          </Link>
        )}
        {portfolioStackContextData.social_youtube && (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={portfolioStackContextData.social_youtube}
            className={primaryColors}
          >
            <YoutubeLogo size={36} weight="duotone" />
          </Link>
        )}
        {portfolioStackContextData.social_tiktok && (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={portfolioStackContextData.social_tiktok}
            className={primaryColors}
          >
            <TiktokLogo size={36} weight="duotone" />
          </Link>
        )}
        {portfolioStackContextData.social_dribble && (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={portfolioStackContextData.social_dribble}
            className={primaryColors}
          >
            <DribbbleLogo size={36} weight="duotone" />
          </Link>
        )}
        {portfolioStackContextData.social_other && (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={portfolioStackContextData.social_other}
            className={primaryColors}
          >
            <LinkLogo size={36} weight="duotone" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default PortfolioHero;
