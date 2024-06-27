"use client";
import FileInput from "@/app/_components/FileInput";
import Join from "@/app/_components/Join";
import NextPreviousNavigation from "@/app/_components/NextPreviousNavigation";
import { PortfolioContext } from "@/app/_components/PortfolioProvider";
import { heroDesignItemsData } from "@/app/_libs/utils";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";

const CreateHero = () => {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [heroTheme, setHeroTheme] = useState(null);
  const { portfolioStackContextData, setPortfolioStackContextData } =
    useContext(PortfolioContext);

  const removeSelectedImage = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  useEffect(() => {
    if (file) {
      console.log(URL.createObjectURL(file));
      setPortfolioStackContextData((prev) => [
        ...prev.filter((el) => el.hero != true),
        { hero: true, img_url: URL.createObjectURL(file) },
      ]);
    } else {
      // remove that image from stack
      setPortfolioStackContextData((prev) =>
        prev.filter((el) => el.hero != true)
      );
    }
  }, [file]);

  return (
    <div className="p-6 flex flex-col gap-8">
      <h2 className="text-4xl font-bold">1. Create hero</h2>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">1.1. Add your photo</h3>
        <FileInput setFile={setFile} fileInputRef={fileInputRef} />

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
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">1.2. Add your name</h3>
        <Join items={heroDesignItemsData} setSelected={setHeroTheme} />
        {heroTheme}
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <h3 className="text-2xl font-bold">1.3. Describe yourself</h3>
          <p>(Or add a funny punchline)</p>
        </div>
        <Join items={heroDesignItemsData} setSelected={setHeroTheme} />
        {heroTheme}
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">1.4. Select hero design</h3>
        <Join items={heroDesignItemsData} setSelected={setHeroTheme} />
        {heroTheme}
      </div>
      <NextPreviousNavigation nextUrl={"/builder/add-work"} />
    </div>
  );
};

export default CreateHero;
