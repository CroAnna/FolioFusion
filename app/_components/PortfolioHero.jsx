import Image from "next/image";
import { useContext, useEffect, useState } from "react";
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
import {
  getBgColor,
  getPrimaryTextColor,
  getPrimaryBorderColors,
  getPrimaryColors,
  getSecondaryColors,
} from "../_libs/utils";

const PortfolioHero = () => {
  const { portfolioStackHeroContextData, portfolioStackBasicContextData } =
    useContext(PortfolioContext);
  const border_style = portfolioStackHeroContextData.hero_border_style;
  const palette = portfolioStackBasicContextData.portfolio_palette;
  const extra_style_elements =
    portfolioStackHeroContextData.hero_extra_style_elements;
  const variant = portfolioStackHeroContextData.hero_variant;

  const [imageUrl, setImageUrl] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const isAdvancedHeroUI = () => {
    // advanced = steps, mono, bubble, spikes
    // basic = abstract, dots
    return (
      extra_style_elements == "steps" ||
      extra_style_elements == "mono" ||
      extra_style_elements == "spikes" ||
      extra_style_elements == "bubble"
    );
  };
  const getHeroExtraStyle = (position) => {
    if (palette === "Palette 1") {
      if (extra_style_elements === "abstract") {
        if (variant === "A") {
          return position == "left"
            ? "/detail-1-blue.png"
            : "/detail-2-orange.png";
        } else if (variant === "B") {
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "dots") {
        if (variant === "A") {
          return position == "left"
            ? "/dots-blue.png"
            : "/dots-long-orange.png";
        } else if (variant === "B") {
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "steps") {
        if (variant === "A") {
          return "/layered-steps-1-hero.svg";
        } else if (variant === "B") {
          return "/layered-steps-1-2-hero.svg";
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "mono") {
        if (variant === "A") {
          return "/mono-1-hero.svg";
        } else if (variant === "B") {
          return "/mono-1-2-hero.svg";
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "bubble") {
        if (variant === "A") {
          return "/bubble-1-hero.svg";
        } else if (variant === "B") {
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "spikes") {
        if (variant === "A") {
          return "/spikes-1-1-hero.svg";
        } else if (variant === "B") {
          return "/spikes-1-2-hero.svg";
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      }
    } else if (palette === "Palette 2") {
      if (extra_style_elements === "abstract") {
        if (variant === "A") {
          return position == "left"
            ? "/detail-1-blue.png"
            : "/detail-2-blue.png";
        } else if (variant === "B") {
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "dots") {
        if (variant === "A") {
          return position == "left" ? "/dots-blue.png" : "/dots-long-blue.png";
        } else if (variant === "B") {
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "steps") {
        if (variant === "A") {
          return "/layered-steps-2-hero.svg";
        } else if (variant === "B") {
          return "/layered-steps-2-2-hero.svg";
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "mono") {
        if (variant === "A") {
          return "/mono-2-hero.svg";
        } else if (variant === "B") {
          return "/mono-2-2-hero.svg";
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "bubble") {
        if (variant === "A") {
          return "/bubble-2-hero.svg";
        } else if (variant === "B") {
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "spikes") {
        if (variant === "A") {
          return "/spikes-2-1-hero.svg";
        } else if (variant === "B") {
          return "/spikes-2-2-hero.svg";
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      }
    } else if (palette === "Palette 3") {
      if (extra_style_elements === "abstract") {
        if (variant === "A") {
          return position == "left"
            ? "/detail-1-green.png"
            : "/detail-2-brown.png";
        } else if (variant === "B") {
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "dots") {
        if (variant === "A") {
          return position == "left"
            ? "/dots-green.png"
            : "/dots-long-brown.png";
        } else if (variant === "B") {
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "steps") {
        if (variant === "A") {
          return "/layered-steps-3-hero.svg";
        } else if (variant === "B") {
          return "/layered-steps-3-2-hero.svg";
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "mono") {
        if (variant === "A") {
          return "/mono-3-hero.svg";
        } else if (variant === "B") {
          return "/mono-3-2-hero.svg";
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "bubble") {
        if (variant === "A") {
          return "/bubble-3-hero.svg";
        } else if (variant === "B") {
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "spikes") {
        if (variant === "A") {
          return "/spikes-3-1-hero.svg";
        } else if (variant === "B") {
          return "/spikes-3-2-hero.svg";
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      }
    } else if (palette === "Palette 4") {
      if (extra_style_elements === "abstract") {
        if (variant === "A") {
          return position == "left"
            ? "/detail-1-yellow.png"
            : "/detail-2-yellow.png";
        } else if (variant === "B") {
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "dots") {
        if (variant === "A") {
          return position == "left"
            ? "/dots-yellow.png"
            : "/dots-long-yellow.png";
        } else if (variant === "B") {
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "steps") {
        if (variant === "A") {
          return "/layered-steps-4-hero.svg";
        } else if (variant === "B") {
          return "/layered-steps-4-2-hero.svg";
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "mono") {
        if (variant === "A") {
          return "/mono-4-hero.svg";
        } else if (variant === "B") {
          return "/mono-4-2-hero.svg";
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "bubble") {
        if (variant === "A") {
          return "/bubble-4-hero.svg";
        } else if (variant === "B") {
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "spikes") {
        if (variant === "A") {
          return "/spikes-4-1-hero.svg";
        } else if (variant === "B") {
          return "/spikes-4-2-hero.svg";
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      }
    } else if (palette === "Palette 5") {
      if (extra_style_elements === "abstract") {
        if (variant === "A") {
          return position == "left"
            ? "/detail-1-emerald.png"
            : "/detail-2-lime.png";
        } else if (variant === "B") {
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "dots") {
        if (variant === "A") {
          return position == "left"
            ? "/dots-emerald.png"
            : "/dots-long-lime.png";
        } else if (variant === "B") {
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "steps") {
        if (variant === "A") {
          return "/layered-steps-5-hero.svg";
        } else if (variant === "B") {
          return "/layered-steps-5-2-hero.svg";
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "mono") {
        if (variant === "A") {
          return "/mono-5-hero.svg";
        } else if (variant === "B") {
          return "/mono-5-2-hero.svg";
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "bubble") {
        if (variant === "A") {
          return "/bubble-5-hero.svg";
        } else if (variant === "B") {
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "spikes") {
        if (variant === "A") {
          return "/spikes-5-1-hero.svg";
        } else if (variant === "B") {
          return "/spikes-5-2-hero.svg";
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      }
    } else if (palette === "Palette 6") {
      if (extra_style_elements === "abstract") {
        if (variant === "A") {
          return position == "left"
            ? "/detail-1-orange.png"
            : "/detail-2-yellow.png";
        } else if (variant === "B") {
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "dots") {
        if (variant === "A") {
          return position == "left"
            ? "/dots-orange.png"
            : "/dots-long-yellow.png";
        } else if (variant === "B") {
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "steps") {
        if (variant === "A") {
          return "/layered-steps-6-hero.svg";
        } else if (variant === "B") {
          return "/layered-steps-6-2-hero.svg";
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "mono") {
        if (variant === "A") {
          return "/mono-6-hero.svg";
        } else if (variant === "B") {
          return "/mono-6-2-hero.svg";
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "bubble") {
        if (variant === "A") {
          return "/bubble-6-hero.svg";
        } else if (variant === "B") {
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "spikes") {
        if (variant === "A") {
          return "/spikes-6-1-hero.svg";
        } else if (variant === "B") {
          return "/spikes-6-2-hero.svg";
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      }
    } else if (palette === "Palette 7") {
      if (extra_style_elements === "abstract") {
        if (variant === "A") {
          return position == "left" ? "" : "";
        } else if (variant === "B") {
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "dots") {
        if (variant === "A") {
          return position == "left" ? "" : "";
        } else if (variant === "B") {
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "steps") {
        if (variant === "A") {
          return "/layered-steps-7-1-hero.svg";
        } else if (variant === "B") {
          return "/layered-steps-7-2-hero.svg";
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "mono") {
        if (variant === "A") {
        } else if (variant === "B") {
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "bubble") {
        if (variant === "A") {
        } else if (variant === "B") {
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      } else if (extra_style_elements === "spikes") {
        if (variant === "A") {
          return "/spikes-7-1-hero.svg";
        } else if (variant === "B") {
          return "/spikes-7-2-hero.svg";
        } else if (variant === "C") {
        } else if (variant === "D") {
        }
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let url;
    try {
      if (portfolioStackHeroContextData.hero_image instanceof File) {
        url = URL.createObjectURL(portfolioStackHeroContextData.hero_image);
      } else {
        url = portfolioStackHeroContextData.hero_image.publicUrl;
      }
    } catch (error) {
      console.error("No image found or null: ", error);
      url = "";
    }
    setImageUrl(url);
  }, [portfolioStackHeroContextData.hero_image]);

  return (
    <div
      className={`hero min-h-screen w-full relative flex flex-col gap-4 justify-center 
        ${isAdvancedHeroUI() && "relative w-full"} 
        ${getPrimaryTextColor(palette)} ${getBgColor(palette)}`}
    >
      {portfolioStackHeroContextData.hero_extra && (
        <div className={`hidden md:block  `}>
          {!isAdvancedHeroUI() ? (
            <Image
              src={getHeroExtraStyle("left")}
              alt={""}
              width="360"
              height="360"
              className={`absolute left-0 ${
                extra_style_elements == "abstract" ? "bottom-0" : "bottom-8"
              }`}
            />
          ) : (
            <Image
              src={getHeroExtraStyle()}
              alt={""}
              layout="fill"
              objectFit="cover"
              className="absolute bottom-0 z-0"
            />
          )}
          {!isAdvancedHeroUI() && (
            <Image
              src={getHeroExtraStyle("right")}
              alt={""}
              width="360"
              height="320"
              className="absolute right-0 top-0"
            />
          )}
        </div>
      )}
      <div
        className={`hero-content rounded-full flex flex-col md:flex-row z-10`}
      >
        {portfolioStackHeroContextData.hero_image && (
          <div
            className={`max-w-xs m-6 inline-block
            ${
              portfolioStackHeroContextData.hero_image_rounded
                ? "rounded-full"
                : "rounded-lg"
            } 
          ${
            portfolioStackHeroContextData.hero_image_border &&
            `border-4 ${
              border_style == "dashed"
                ? "border-dashed"
                : border_style == "solid"
                ? "border-solid"
                : border_style == "dotted"
                ? "border-dotted"
                : "border-double"
            } p-4 ${getPrimaryBorderColors(palette)}`
          }`}
          >
            <Image
              quality={40}
              width={320}
              height={320}
              src={imageUrl}
              alt=""
              className={`${
                portfolioStackHeroContextData.hero_image_rounded
                  ? "rounded-full"
                  : "rounded-lg"
              } w-full h-full`}
            />
          </div>
        )}
        {
          <div className="flex flex-col gap-4">
            <p
              className={`py-0 text-lg`}
              style={{
                textAlign: isMobile
                  ? portfolioStackHeroContextData.hero_mobile_alignment
                  : portfolioStackHeroContextData.hero_desktop_alignment,
              }}
            >
              {portfolioStackHeroContextData.hero_welcome}
            </p>
            <div>
              <h1
                className={`text-5xl md:text-8xl font-bold break-words max-w-[680px] mt-2 md:mt-0 
                ${getPrimaryColors(palette)}`}
                style={{
                  textAlign: isMobile
                    ? portfolioStackHeroContextData.hero_mobile_alignment
                    : portfolioStackHeroContextData.hero_desktop_alignment,
                }}
              >
                {portfolioStackHeroContextData.hero_name}
              </h1>
              <h2
                className={`text-4xl md:text-5xl font-bold 
                  ${getSecondaryColors(palette)}`}
                style={{
                  textAlign: isMobile
                    ? portfolioStackHeroContextData.hero_mobile_alignment
                    : portfolioStackHeroContextData.hero_desktop_alignment,
                }}
              >
                {portfolioStackHeroContextData.hero_short}
              </h2>
            </div>
            <p
              className={`md:text-lg max-w-xl md:py-4`}
              style={{
                textAlign: isMobile
                  ? portfolioStackHeroContextData.hero_mobile_alignment
                  : portfolioStackHeroContextData.hero_desktop_alignment,
              }}
            >
              {portfolioStackHeroContextData.hero_description}
            </p>
          </div>
        }
      </div>
      <div className="flex gap-2">
        {portfolioStackHeroContextData.social_github && (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={portfolioStackHeroContextData.social_github}
            className={`z-20 ${getPrimaryColors(palette)}`}
          >
            <GithubLogo size={36} weight="duotone" />
          </Link>
        )}
        {portfolioStackHeroContextData.social_linkedin && (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={portfolioStackHeroContextData.social_linkedin}
            className={`z-20 ${getPrimaryColors(palette)}`}
          >
            <LinkedinLogo size={36} weight="duotone" />
          </Link>
        )}
        {portfolioStackHeroContextData.social_x && (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={portfolioStackHeroContextData.social_x}
            className={`z-20 ${getPrimaryColors(palette)}`}
          >
            <XLogo size={36} weight="duotone" />
          </Link>
        )}
        {portfolioStackHeroContextData.social_facebook && (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={portfolioStackHeroContextData.social_facebook}
            className={`z-20 ${getPrimaryColors(palette)}`}
          >
            <FacebookLogo size={36} weight="duotone" />
          </Link>
        )}
        {portfolioStackHeroContextData.social_instagram && (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={portfolioStackHeroContextData.social_instagram}
            className={`z-20 ${getPrimaryColors(palette)}`}
          >
            <InstagramLogo size={36} weight="duotone" />
          </Link>
        )}
        {portfolioStackHeroContextData.social_youtube && (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={portfolioStackHeroContextData.social_youtube}
            className={`z-20 ${getPrimaryColors(palette)}`}
          >
            <YoutubeLogo size={36} weight="duotone" />
          </Link>
        )}
        {portfolioStackHeroContextData.social_tiktok && (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={portfolioStackHeroContextData.social_tiktok}
            className={`z-20 ${getPrimaryColors(palette)}`}
          >
            <TiktokLogo size={36} weight="duotone" />
          </Link>
        )}
        {portfolioStackHeroContextData.social_dribble && (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={portfolioStackHeroContextData.social_dribble}
            className={`z-20 ${getPrimaryColors(palette)}`}
          >
            <DribbbleLogo size={36} weight="duotone" />
          </Link>
        )}
        {portfolioStackHeroContextData.social_other && (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={portfolioStackHeroContextData.social_other}
            className={`z-20 ${getPrimaryColors(palette)}`}
          >
            <LinkLogo size={36} weight="duotone" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default PortfolioHero;
