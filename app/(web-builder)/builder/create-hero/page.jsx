"use client";
import FileInput from "@/app/_components/FileInput";
import Input from "@/app/_components/Input";
import Join from "@/app/_components/Join";
import loadingGif from "@/public/loading.gif";
import NextPreviousNavigation from "@/app/_components/NextPreviousNavigation";
import { PortfolioContext } from "@/app/_components/PortfolioProvider";
import Toggle from "@/app/_components/Toggle";
import {
  borderStyleItemsData,
  heroAlignmentItemsData,
  heroExtraElementsData,
  heroVariantData,
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
import { deleteUnusedImages } from "../actions";
import Image from "next/image";

const CreateHero = () => {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [firstLoad, setFirstLoad] = useState(false);
  const [imagesToRemove, setImagesToRemove] = useState([]);
  const [isPending, setIsPending] = useState(false);

  const {
    portfolioStackHeroContextData,
    setPortfolioStackHeroContextData,
    portfolioStackBasicContextData,
    setPortfolioStackBasicContextData,
  } = useContext(PortfolioContext);

  const removeSelectedImage = () => {
    if (portfolioStackHeroContextData.hero_image.publicUrl) {
      const imgUrl = portfolioStackHeroContextData.hero_image.publicUrl;
      setImagesToRemove([...imagesToRemove, imgUrl]);
    }
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setPortfolioStackHeroContextData({
      ...portfolioStackHeroContextData,
      hero_image: null,
      hero_image_rounded: false,
      hero_border_style: "dashed",
      hero_image_border: false,
    });
  };

  const handleUpdate = (field, value) => {
    setPortfolioStackHeroContextData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const getHero = useCallback(async () => {
    setIsPending(true);
    const { hero, hero_image, error, portfolio, error2 } =
      await getCreateHeroData();
    if (error) {
      console.log(error);
    } else {
      if (portfolio) {
        setPortfolioStackBasicContextData({
          ...portfolioStackBasicContextData,
          id: portfolio.id,
          portfolio_palette: portfolio.portfolio_palette,
          portfolio_font_primary: portfolio.portfolio_font_primary,
          portfolio_font_secondary: portfolio.portfolio_font_secondary,
          projects_design: portfolio.projects_design,
          projects_alignment: portfolio.projects_alignment,
          experience_alignment: portfolio.experience_alignment,
        });
      }
      setPortfolioStackHeroContextData({
        ...portfolioStackHeroContextData,
        id: hero.id,
        hero_image: hero_image,
        hero_image_rounded: hero.hero_image_rounded,
        hero_image_border: hero.hero_image_border,
        hero_border_style: hero.hero_border_style,
        hero_extra: hero.hero_extra,
        hero_scroll_to_top: hero.hero_scroll_to_top,
        hero_extra_style_elements: hero.hero_extra_style_elements,
        hero_variant: hero.hero_variant,
        hero_welcome: hero.hero_welcome,
        hero_bg_disabled_mobile: hero.hero_bg_disabled_mobile,
        hero_mobile_alignment: hero.hero_mobile_alignment,
        hero_desktop_alignment: hero.hero_desktop_alignment,
        hero_name: hero.hero_name,
        hero_short: hero.hero_short,
        hero_description: hero.hero_description,
        social_github: hero.social_github,
        social_linkedin: hero.social_linkedin,
        social_x: hero.social_x,
        social_facebook: hero.social_facebook,
        social_instagram: hero.social_instagram,
        social_youtube: hero.social_youtube,
        social_tiktok: hero.social_tiktok,
        social_dribble: hero.social_dribble,
        social_other: hero.social_other,
        project_group_description: hero.project_group_description,
        project_group_title: hero.project_group_title,
        experience_group_title: hero.experience_group_title,
        experience_group_description: hero.experience_group_description,
        activity_bg_shape: hero.activity_bg_shape,
      });
    }
    setIsPending(false);
  }, []);

  useEffect(() => {
    getHero();

    if (portfolioStackHeroContextData.hero_image) {
      setFile(portfolioStackHeroContextData.hero_image);
    }
  }, []);

  useEffect(() => {
    if (file && !portfolioStackHeroContextData.hero_image) {
      setFirstLoad(true);
      setPortfolioStackHeroContextData({
        ...portfolioStackHeroContextData,
        hero_image: file,
      });
    } else if (file && portfolioStackHeroContextData.hero_image) {
      if (!firstLoad) {
        setPortfolioStackHeroContextData({
          ...portfolioStackHeroContextData,
          hero_image: file,
        });
        setFirstLoad(true);
      } else {
        // ovo nisam sigurna jel se ikad pozove opce i jel taj load sluzi icemu
        setPortfolioStackHeroContextData({
          ...portfolioStackHeroContextData,
          hero_image: file,
        });
      }
    }
  }, [file]);

  const saveData = async () => {
    setIsPending(true);
    const deleteRes = await deleteUnusedImages(imagesToRemove);
    console.log(deleteRes);

    const response = await upsertCreateHeroData(
      portfolioStackHeroContextData.id,
      portfolioStackHeroContextData.hero_image,
      portfolioStackHeroContextData.hero_image_rounded,
      portfolioStackHeroContextData.hero_image_border,
      portfolioStackHeroContextData.hero_border_style,
      portfolioStackHeroContextData.hero_extra,
      portfolioStackHeroContextData.hero_scroll_to_top,
      portfolioStackHeroContextData.hero_extra_style_elements,
      portfolioStackHeroContextData.hero_variant,
      portfolioStackHeroContextData.hero_welcome,
      portfolioStackHeroContextData.hero_bg_disabled_mobile,
      portfolioStackHeroContextData.hero_mobile_alignment,
      portfolioStackHeroContextData.hero_desktop_alignment,
      portfolioStackHeroContextData.hero_name,
      portfolioStackHeroContextData.hero_short,
      portfolioStackHeroContextData.hero_description,
      portfolioStackHeroContextData.social_github,
      portfolioStackHeroContextData.social_linkedin,
      portfolioStackHeroContextData.social_x,
      portfolioStackHeroContextData.social_facebook,
      portfolioStackHeroContextData.social_instagram,
      portfolioStackHeroContextData.social_youtube,
      portfolioStackHeroContextData.social_tiktok,
      portfolioStackHeroContextData.social_dribble,
      portfolioStackHeroContextData.social_other
    );
    console.log(response);
    setPortfolioStackHeroContextData(response.hero);
    setIsPending(false);
  };

  return (
    <div className="p-6 flex flex-col gap-8">
      <div className="flex justify-between gap-2">
        <h2 className="text-2xl items-center flex md:text-4xl font-bold">
          1. Create hero
        </h2>
        <button
          className="btn btn-secondary btn-outline w-fit"
          onClick={saveData}
          disabled={isPending}
        >
          {isPending ? (
            <div className="flex gap-1 items-center justify-center">
              <Image
                quality={40}
                src={loadingGif}
                width={24}
                height={24}
                alt="spinner"
              />
              <p>Saving...</p>
            </div>
          ) : (
            <p> Save</p>
          )}
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl md:text-2xl font-bold">1.1. Add your photo</h3>
        <div className="flex gap-4">
          {!portfolioStackHeroContextData.hero_image ? (
            <div>
              <FileInput
                disabled={isPending}
                setFile={setFile}
                file={file}
                fileInputRef={fileInputRef}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-2 w-full">
              {portfolioStackHeroContextData.hero_image && (
                <>
                  <Toggle
                    disabled={isPending}
                    text={"Rounded image"}
                    yesNo
                    onChange={(e) => {
                      console.log(portfolioStackHeroContextData.hero_image);
                      handleUpdate("hero_image_rounded", e.target.checked);
                    }}
                    checked={portfolioStackHeroContextData.hero_image_rounded}
                  />
                  <Toggle
                    disabled={isPending}
                    checked={portfolioStackHeroContextData.hero_image_border}
                    text={"Border around image"}
                    yesNo
                    onChange={(e) => {
                      handleUpdate("hero_image_border", e.target.checked);
                    }}
                  />
                  {portfolioStackHeroContextData.hero_image_border && (
                    <Join
                      disabled={isPending}
                      value={portfolioStackHeroContextData.hero_border_style}
                      items={borderStyleItemsData}
                      onChange={(e) => {
                        handleUpdate("hero_border_style", e.target.value);
                      }}
                      name={"hero_border_style"}
                    />
                  )}
                </>
              )}

              <button
                disabled={isPending}
                className="btn btn-outline w-fit btn-error btn-ghost disabled:bg-neutral-700"
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
          <h3 className="text-xl md:text-2xl font-bold">
            1.2. Add welcome text
          </h3>
        </div>
        <Input
          name={"hero_welcome"}
          disabled={isPending}
          value={portfolioStackHeroContextData.hero_welcome}
          onChange={(e) => {
            handleUpdate("hero_welcome", e.target.value);
          }}
          placeholder={"Hi, I am / Welcome to "}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl md:text-2xl font-bold">1.3. Add your name</h3>
        <Input
          disabled={isPending}
          name={"hero_name"}
          value={portfolioStackHeroContextData.hero_name}
          onChange={(e) => {
            handleUpdate("hero_name", e.target.value);
          }}
          placeholder={"Enter your name"}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <h3 className="text-xl md:text-2xl font-bold">
            1.4. Short text about you
          </h3>
        </div>
        <Input
          disabled={isPending}
          name={"hero_short"}
          value={portfolioStackHeroContextData.hero_short}
          onChange={(e) => {
            handleUpdate("hero_short", e.target.value);
          }}
          placeholder={"Who are you? What you do?"}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <h3 className="text-xl md:text-2xl font-bold">
            1.5. Describe yourself
          </h3>
          <p>(Or add a funny punchline)</p>
        </div>
        <Input
          disabled={isPending}
          name={"hero_description"}
          value={portfolioStackHeroContextData.hero_description}
          onChange={(e) => {
            handleUpdate("hero_description", e.target.value);
          }}
          placeholder={"Enter description"}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl md:text-2xl font-bold">
          1.6. Select UI of your hero
        </h3>
        <Toggle
          disabled={isPending}
          checked={portfolioStackHeroContextData.hero_extra}
          text={"Show custom elements"}
          yesNo
          onChange={(e) => {
            handleUpdate("hero_extra", e.target.checked);
          }}
        />

        {portfolioStackHeroContextData.hero_extra && (
          <>
            <Toggle
              disabled={isPending}
              checked={portfolioStackHeroContextData.hero_bg_disabled_mobile}
              text={"Custom elements hidden on small screens?"}
              yesNo
              onChange={(e) => {
                handleUpdate("hero_bg_disabled_mobile", e.target.checked);
              }}
            />
            <Join
              disabled={isPending}
              value={portfolioStackHeroContextData.hero_extra_style_elements}
              items={heroExtraElementsData}
              onChange={(e) => {
                handleUpdate("hero_extra_style_elements", e.target.value);
              }}
              name={"hero_extra_style_elements"}
            />
            <Join
              disabled={isPending}
              value={portfolioStackHeroContextData.hero_variant}
              items={heroVariantData}
              onChange={(e) => {
                handleUpdate("hero_variant", e.target.value);
              }}
              name={"hero_variant"}
            />
          </>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <h3 className="text-xl md:text-2xl font-bold">
            1.7. Add links to social medias
          </h3>
          <p>(Or leave blank)</p>
        </div>
        <Input
          disabled={isPending}
          icon={<GithubLogo size={32} weight="duotone" />}
          name={"social_github"}
          value={portfolioStackHeroContextData.social_github}
          onChange={(e) => {
            handleUpdate("social_github", e.target.value);
          }}
          placeholder={"Paste Github URL"}
        />
        <Input
          disabled={isPending}
          icon={<LinkedinLogo size={32} weight="duotone" />}
          name={"social_linkedin"}
          value={portfolioStackHeroContextData.social_linkedin}
          onChange={(e) => {
            handleUpdate("social_linkedin", e.target.value);
          }}
          placeholder={"Paste LinkedIn URL"}
        />
        <Input
          disabled={isPending}
          icon={<XLogo size={32} weight="duotone" />}
          name={"social_x"}
          value={portfolioStackHeroContextData.social_x}
          onChange={(e) => {
            handleUpdate("social_x", e.target.value);
          }}
          placeholder={"Paste X URL"}
        />
        <Input
          disabled={isPending}
          icon={<FacebookLogo size={32} weight="duotone" />}
          name={"social_facebook"}
          value={portfolioStackHeroContextData.social_facebook}
          onChange={(e) => {
            handleUpdate("social_facebook", e.target.value);
          }}
          placeholder={"Paste Facebook URL"}
        />
        <Input
          disabled={isPending}
          icon={<InstagramLogo size={32} weight="duotone" />}
          name={"social_instagram"}
          value={portfolioStackHeroContextData.social_instagram}
          onChange={(e) => {
            handleUpdate("social_instagram", e.target.value);
          }}
          placeholder={"Paste Instagram URL"}
        />
        <Input
          disabled={isPending}
          icon={<YoutubeLogo size={32} weight="duotone" />}
          name={"social_youtube"}
          value={portfolioStackHeroContextData.social_youtube}
          onChange={(e) => {
            handleUpdate("social_youtube", e.target.value);
          }}
          placeholder={"Paste Youtube URL"}
        />
        <Input
          disabled={isPending}
          icon={<TiktokLogo size={32} weight="duotone" />}
          name={"social_tiktok"}
          value={portfolioStackHeroContextData.social_tiktok}
          onChange={(e) => {
            handleUpdate("social_tiktok", e.target.value);
          }}
          placeholder={"Paste TikTok URL"}
        />
        <Input
          disabled={isPending}
          icon={<DribbbleLogo size={32} weight="duotone" />}
          value={portfolioStackHeroContextData.social_dribble}
          name={"social_dribble"}
          onChange={(e) => {
            handleUpdate("social_dribble", e.target.value);
          }}
          placeholder={"Paste Dribbble URL"}
        />
        <Input
          disabled={isPending}
          icon={<Link size={32} weight="duotone" />}
          value={portfolioStackHeroContextData.social_other}
          name={"social_other"}
          onChange={(e) => {
            handleUpdate("social_other", e.target.value);
          }}
          placeholder={"Paste other URL"}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl md:text-2xl font-bold">
          1.8. Do you want to have scroll to top button ?
        </h3>
        <Toggle
          disabled={isPending}
          yesNo
          checked={portfolioStackHeroContextData.hero_scroll_to_top}
          text={
            "Scroll to top (visible on deployed portfolio with custom domain)"
          }
          onChange={(e) => {
            handleUpdate("hero_scroll_to_top", e.target.checked);
          }}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl md:text-2xl font-bold">
          1.9. Select text alignments
        </h3>
        <p>Mobile text alignment</p>
        <Join
          disabled={isPending}
          value={portfolioStackHeroContextData.hero_mobile_alignment}
          items={heroAlignmentItemsData}
          onChange={(e) => {
            handleUpdate("hero_mobile_alignment", e.target.value);
          }}
          name={"hero_mobile_alignment"}
        />
        <p>Desktop text alignment</p>
        <Join
          disabled={isPending}
          value={portfolioStackHeroContextData.hero_desktop_alignment}
          items={heroAlignmentItemsData}
          onChange={(e) => {
            handleUpdate("hero_desktop_alignment", e.target.value);
          }}
          name={"hero_desktop_alignment"}
        />
      </div>
      <NextPreviousNavigation
        setIsPending={setIsPending}
        handleNextClick={saveData}
        nextUrl={"/builder/add-projects"}
        disabled={isPending}
      />
    </div>
  );
};

export default CreateHero;
