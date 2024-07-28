"use client";
import FileInput from "@/app/_components/FileInput";
import Input from "@/app/_components/Input";
import Join from "@/app/_components/Join";
import NextPreviousNavigation from "@/app/_components/NextPreviousNavigation";
import { PortfolioContext } from "@/app/_components/PortfolioProvider";
import Toggle from "@/app/_components/Toggle";
import {
  borderStyleItemsData,
  heroExtraElementsData,
  heroPaletteItemsData,
} from "@/app/_libs/utils";
import {
  DribbbleLogo,
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TiktokLogo,
  XLogo,
  YoutubeLogo,
  Link,
} from "@phosphor-icons/react/dist/ssr";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { getCreateHeroData, upsertCreateHeroData } from "./actions";

const CreateHero = () => {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [firstLoad, setFirstLoad] = useState(false);

  const { portfolioStackContextData, setPortfolioStackContextData } =
    useContext(PortfolioContext);

  const removeSelectedImage = () => {
    setFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setPortfolioStackContextData({
      ...portfolioStackContextData,
      hero_image: null,
      hero_image_rounded: false,
      hero_border_style: "dashed",
      hero_image_border: false,
    });
  };

  const handleUpdate = (field, value) => {
    setPortfolioStackContextData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const getPortfolio = useCallback(async () => {
    const { portfolio, hero_image, error } = await getCreateHeroData();
    console.log(hero_image);
    if (error) {
      console.log(error);
    } else {
      setPortfolioStackContextData({
        ...portfolioStackContextData,
        id: portfolio.id,
        hero_image: hero_image,
        hero_image_rounded: portfolio.hero_image_rounded,
        hero_image_border: portfolio.hero_image_border,
        hero_border_style: portfolio.hero_border_style,
        hero_extra: portfolio.hero_extra,
        hero_palette: portfolio.hero_palette,
        hero_extra_style_elements: portfolio.hero_extra_style_elements,
        hero_welcome: portfolio.hero_welcome,
        hero_name: portfolio.hero_name,
        hero_short: portfolio.hero_short,
        hero_description: portfolio.hero_description,
        social_github: portfolio.social_github,
        social_linkedin: portfolio.social_linkedin,
        social_x: portfolio.social_x,
        social_facebook: portfolio.social_facebook,
        social_instagram: portfolio.social_instagram,
        social_youtube: portfolio.social_youtube,
        social_tiktok: portfolio.social_tiktok,
        social_dribble: portfolio.social_dribble,
        social_other: portfolio.social_other,
        project_group_description: portfolio.project_group_description,
        project_group_title: portfolio.project_group_title,
        experience_group_title: portfolio.experience_group_title,
        experience_group_description: portfolio.experience_group_description,
        activity_bg_shape: portfolio.activity_bg_shape,
      });
    }
  }, []);

  useEffect(() => {
    getPortfolio();

    if (portfolioStackContextData.hero_image) {
      setFile(portfolioStackContextData.hero_image);
    }
  }, []);

  useEffect(() => {
    if (file && !portfolioStackContextData.hero_image) {
      setFirstLoad(true);
      setPortfolioStackContextData({
        ...portfolioStackContextData,
        hero_image: file,
      });
    } else if (file && portfolioStackContextData.hero_image) {
      if (!firstLoad) {
        setPortfolioStackContextData({
          ...portfolioStackContextData,
          hero_image: file,
        });
        setFirstLoad(true);
      } else {
        // ovo nisam sigurna jel se ikad pozove opce i jel taj load sluzi icemu
        setPortfolioStackContextData({
          ...portfolioStackContextData,
          hero_image: file,
        });
      }
    }
  }, [file]);

  const saveData = async () => {
    const response = await upsertCreateHeroData(
      portfolioStackContextData.id,
      portfolioStackContextData.hero_image,
      portfolioStackContextData.hero_image_rounded,
      portfolioStackContextData.hero_image_border,
      portfolioStackContextData.hero_border_style,
      portfolioStackContextData.hero_extra,
      portfolioStackContextData.hero_palette,
      portfolioStackContextData.hero_extra_style_elements,
      portfolioStackContextData.hero_welcome,
      portfolioStackContextData.hero_name,
      portfolioStackContextData.hero_short,
      portfolioStackContextData.hero_description,
      portfolioStackContextData.social_github,
      portfolioStackContextData.social_linkedin,
      portfolioStackContextData.social_x,
      portfolioStackContextData.social_facebook,
      portfolioStackContextData.social_instagram,
      portfolioStackContextData.social_youtube,
      portfolioStackContextData.social_tiktok,
      portfolioStackContextData.social_dribble,
      portfolioStackContextData.social_other
    );
    console.log(response);
  };

  return (
    <div className="p-6 flex flex-col gap-8">
      <div className="flex justify-between">
        <h2 className="text-4xl font-bold">1. Create hero</h2>
        <button
          className="btn btn-secondary w-24 btn-outline"
          onClick={saveData}
        >
          Save
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">1.1. Add your photo</h3>
        <div className="flex gap-4">
          {!portfolioStackContextData.hero_image ? (
            <div>
              <FileInput
                setFile={setFile}
                file={file}
                fileInputRef={fileInputRef}
              />
              {file && (
                <>
                  <Toggle
                    text={"Rounded image"}
                    onChange={(e) => {
                      console.log(portfolioStackContextData.hero_image);
                      handleUpdate("hero_image_rounded", e.target.checked);
                    }}
                    checked={portfolioStackContextData.hero_image_rounded}
                  />
                  <Toggle
                    checked={portfolioStackContextData.hero_image_border}
                    text={"Border around image"}
                    onChange={(e) => {
                      handleUpdate("hero_image_border", e.target.checked);
                    }}
                  />
                  {portfolioStackContextData.hero_image_border && (
                    <Join
                      value={portfolioStackContextData.hero_border_style}
                      items={borderStyleItemsData}
                      onChange={(e) => {
                        handleUpdate("hero_border_style", e.target.value);
                      }}
                      name={"hero_border_style"}
                    />
                  )}
                </>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <button
                className="btn btn-outline w-fit btn-error btn-ghost"
                onClick={removeSelectedImage}
              >
                Remove image
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <h3 className="text-2xl font-bold">1.2. Add welcome text</h3>
        </div>
        <Input
          name={"hero_welcome"}
          value={portfolioStackContextData.hero_welcome}
          onChange={(e) => {
            handleUpdate("hero_welcome", e.target.value);
          }}
          placeholder={"Hi, I am / Welcome to "}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">1.3. Add your name</h3>
        <Input
          name={"hero_name"}
          value={portfolioStackContextData.hero_name}
          onChange={(e) => {
            handleUpdate("hero_name", e.target.value);
          }}
          placeholder={"Enter your name"}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <h3 className="text-2xl font-bold">1.4. Short text about you</h3>
        </div>
        <Input
          name={"hero_short"}
          value={portfolioStackContextData.hero_short}
          onChange={(e) => {
            handleUpdate("hero_short", e.target.value);
          }}
          placeholder={"Who are you? What you do?"}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <h3 className="text-2xl font-bold">1.5. Describe yourself</h3>
          <p>(Or add a funny punchline)</p>
        </div>
        <Input
          name={"hero_description"}
          value={portfolioStackContextData.hero_description}
          onChange={(e) => {
            handleUpdate("hero_description", e.target.value);
          }}
          placeholder={"Enter description"}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">
          1.6. Select hero background color
        </h3>
        <Join
          value={portfolioStackContextData.hero_palette}
          items={heroPaletteItemsData}
          onChange={(e) => {
            handleUpdate("hero_palette", e.target.value);
          }}
          name={"hero_palette"}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">1.7. Select UI of your hero</h3>
        <Toggle
          checked={portfolioStackContextData.hero_extra}
          text={"Border around image"}
          onChange={(e) => {
            handleUpdate("hero_extra", e.target.checked);
          }}
        />
        {portfolioStackContextData.hero_extra && (
          <Join
            value={portfolioStackContextData.hero_extra_style_elements}
            items={heroExtraElementsData}
            onChange={(e) => {
              handleUpdate("hero_extra_style_elements", e.target.value);
            }}
            name={"hero_extra_style_elements"}
          />
        )}
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <h3 className="text-2xl font-bold">
            1.8. Add links to social medias
          </h3>
          <p>(Or leave blank)</p>
        </div>
        <Input
          icon={<GithubLogo size={32} weight="duotone" />}
          name={"social_github"}
          value={portfolioStackContextData.social_github}
          onChange={(e) => {
            handleUpdate("social_github", e.target.value);
          }}
          placeholder={"Paste Github URL"}
        />
        <Input
          icon={<LinkedinLogo size={32} weight="duotone" />}
          name={"social_linkedin"}
          value={portfolioStackContextData.social_linkedin}
          onChange={(e) => {
            handleUpdate("social_linkedin", e.target.value);
          }}
          placeholder={"Paste LinkedIn URL"}
        />
        <Input
          icon={<XLogo size={32} weight="duotone" />}
          name={"social_x"}
          value={portfolioStackContextData.social_x}
          onChange={(e) => {
            handleUpdate("social_x", e.target.value);
          }}
          placeholder={"Paste X URL"}
        />
        <Input
          icon={<FacebookLogo size={32} weight="duotone" />}
          name={"social_facebook"}
          value={portfolioStackContextData.social_facebook}
          onChange={(e) => {
            handleUpdate("social_facebook", e.target.value);
          }}
          placeholder={"Paste Facebook URL"}
        />
        <Input
          icon={<InstagramLogo size={32} weight="duotone" />}
          name={"social_instagram"}
          value={portfolioStackContextData.social_instagram}
          onChange={(e) => {
            handleUpdate("social_instagram", e.target.value);
          }}
          placeholder={"Paste Instagram URL"}
        />
        <Input
          icon={<YoutubeLogo size={32} weight="duotone" />}
          name={"social_youtube"}
          value={portfolioStackContextData.social_youtube}
          onChange={(e) => {
            handleUpdate("social_youtube", e.target.value);
          }}
          placeholder={"Paste Youtube URL"}
        />
        <Input
          icon={<TiktokLogo size={32} weight="duotone" />}
          name={"social_tiktok"}
          value={portfolioStackContextData.social_tiktok}
          onChange={(e) => {
            handleUpdate("social_tiktok", e.target.value);
          }}
          placeholder={"Paste TikTok URL"}
        />
        <Input
          icon={<DribbbleLogo size={32} weight="duotone" />}
          value={portfolioStackContextData.social_dribble}
          name={"social_dribble"}
          onChange={(e) => {
            handleUpdate("social_dribble", e.target.value);
          }}
          placeholder={"Paste Dribble URL"}
        />
        <Input
          icon={<Link size={32} weight="duotone" />}
          value={portfolioStackContextData.social_other}
          name={"social_other"}
          onChange={(e) => {
            handleUpdate("social_other", e.target.value);
          }}
          placeholder={"Paste other URL"}
        />
      </div>
      <NextPreviousNavigation
        handleNextClick={saveData}
        nextUrl={"/builder/add-projects"}
      />
    </div>
  );
};

export default CreateHero;
