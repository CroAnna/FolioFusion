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
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";

const CreateHero = () => {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [heroPalette, setHeroPalette] = useState();
  const [roundedHeroImage, setRoundedHeroImage] = useState(null);
  const [borderHeroImage, setBorderHeroImage] = useState(null);
  const [borderStyleHeroImage, setBorderStyleHeroImage] = useState(null);
  const [extraElements, setExtraElements] = useState(null);
  const [extraStyleElements, setExtraStyleElements] = useState(null);

  const { portfolioStackContextData, setPortfolioStackContextData } =
    useContext(PortfolioContext);

  const removeSelectedImage = () => {
    setFile(null);
    setRoundedHeroImage(false);
    setBorderHeroImage(false);
    setBorderStyleHeroImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleRoundedToggle = () => {
    setRoundedHeroImage(!roundedHeroImage);
  };

  const handleBorderToggle = () => {
    setBorderHeroImage(!borderHeroImage);
  };

  const handleExtraElementsToggle = () => {
    setExtraElements(!extraElements);
  };

  const handleUpdate = (field, value) => {
    setPortfolioStackContextData({
      ...portfolioStackContextData,
      [field]: value,
    });
  };

  useEffect(() => {
    handleUpdate("hero_palette", heroPalette);
  }, [heroPalette]);

  useEffect(() => {
    handleUpdate("hero_image_rounded", roundedHeroImage);
  }, [roundedHeroImage]);

  useEffect(() => {
    handleUpdate("hero_image_border", borderHeroImage);
  }, [borderHeroImage]);

  useEffect(() => {
    handleUpdate("hero_border_style", borderStyleHeroImage);
  }, [borderStyleHeroImage]);

  useEffect(() => {
    handleUpdate("hero_extra", extraElements);
  }, [extraElements]);

  useEffect(() => {
    handleUpdate("hero_extra_style_elements", extraStyleElements);
  }, [extraStyleElements]);

  useEffect(() => {
    if (file) {
      setPortfolioStackContextData({
        ...portfolioStackContextData,
        hero_image: URL.createObjectURL(file),
      });
    } else {
      setPortfolioStackContextData({
        ...portfolioStackContextData,
        hero_image: undefined,
        hero_image_rounded: undefined,
        hero_border_style: undefined,
        hero_image_border: undefined,
      });
    }
  }, [file]);

  return (
    <div className="p-6 flex flex-col gap-8">
      <h2 className="text-4xl font-bold">1. Create hero</h2>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">1.1. Add your photo</h3>
        <div className="flex gap-4">
          <div>
            <FileInput setFile={setFile} fileInputRef={fileInputRef} />
            {file && (
              <>
                <Toggle text={"Rounded image"} onChange={handleRoundedToggle} />
                <Toggle
                  text={"Border around image"}
                  onChange={handleBorderToggle}
                />
                {borderHeroImage && (
                  <Join
                    items={borderStyleItemsData}
                    setSelected={setBorderStyleHeroImage}
                    name={"hero_border_style"}
                  />
                )}
              </>
            )}
          </div>
          {file && (
            <div className="flex flex-col gap-2">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <Image
                    className="max-w-full max-h-96"
                    src={URL.createObjectURL(file)}
                    alt={file}
                    width="96"
                    height="96"
                  />
                </div>
              </div>
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
          items={heroPaletteItemsData}
          setSelected={setHeroPalette}
          name={"hero_palette"}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">1.7. Select UI of your hero</h3>
        <Toggle
          text={"Show extra elements"}
          onChange={handleExtraElementsToggle}
        />
        {extraElements && (
          <Join
            items={heroExtraElementsData}
            setSelected={setExtraStyleElements}
            name={"hero_extra"}
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
          onChange={(e) => {
            handleUpdate("social_github", e.target.value);
          }}
          placeholder={"Paste Github URL"}
        />
        <Input
          icon={<LinkedinLogo size={32} weight="duotone" />}
          name={"social_linkedin"}
          onChange={(e) => {
            handleUpdate("social_linkedin", e.target.value);
          }}
          placeholder={"Paste LinkedIn URL"}
        />
        <Input
          icon={<XLogo size={32} weight="duotone" />}
          name={"social_x"}
          onChange={(e) => {
            handleUpdate("social_x", e.target.value);
          }}
          placeholder={"Paste X URL"}
        />
        <Input
          icon={<FacebookLogo size={32} weight="duotone" />}
          name={"social_facebook"}
          onChange={(e) => {
            handleUpdate("social_facebook", e.target.value);
          }}
          placeholder={"Paste Facebook URL"}
        />
        <Input
          icon={<InstagramLogo size={32} weight="duotone" />}
          name={"social_instagram"}
          onChange={(e) => {
            handleUpdate("social_instagram", e.target.value);
          }}
          placeholder={"Paste Instagram URL"}
        />
        <Input
          icon={<YoutubeLogo size={32} weight="duotone" />}
          name={"social_youtube"}
          onChange={(e) => {
            handleUpdate("social_youtube", e.target.value);
          }}
          placeholder={"Paste Youtube URL"}
        />
        <Input
          icon={<TiktokLogo size={32} weight="duotone" />}
          name={"social_tiktok"}
          onChange={(e) => {
            handleUpdate("social_tiktok", e.target.value);
          }}
          placeholder={"Paste TikTok URL"}
        />
        <Input
          icon={<DribbbleLogo size={32} weight="duotone" />}
          name={"social_dribble"}
          onChange={(e) => {
            handleUpdate("social_dribble", e.target.value);
          }}
          placeholder={"Paste Dribble URL"}
        />
        <Input
          icon={<Link size={32} weight="duotone" />}
          name={"social_other"}
          onChange={(e) => {
            handleUpdate("social_other", e.target.value);
          }}
          placeholder={"Paste other URL"}
        />
      </div>
      <NextPreviousNavigation nextUrl={"/builder/add-work"} />
    </div>
  );
};

export default CreateHero;
