"use client";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { PortfolioContext } from "@/app/_components/PortfolioProvider";
import { getCreateBasicInfo, upsertCreatePortfolioBasicData } from "./actions";
import NextPreviousNavigation from "@/app/_components/NextPreviousNavigation";
import Join from "@/app/_components/Join";
import {
  experienceAlignmentItemsData,
  portfolioFontItemsData,
  portfolioPaletteItemsData,
  projectDesignsItemsData,
  projectsAlignmentItemsData,
} from "@/app/_libs/utils";
import Image from "next/image";
import loadingGif from "@/public/loading.gif";

const BasicInfo = () => {
  const { portfolioStackBasicContextData, setPortfolioStackBasicContextData } =
    useContext(PortfolioContext);
  const [isPending, setIsPending] = useState(false);

  const handleUpdate = (field, value) => {
    setPortfolioStackBasicContextData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const getBasicInfo = useCallback(async () => {
    setIsPending(true);
    const { portfolio, error } = await getCreateBasicInfo();
    if (error) {
      console.log(error);
    } else {
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
    setIsPending(false);
  }, []);

  useEffect(() => {
    getBasicInfo();
  }, []);

  const saveData = async () => {
    setIsPending(true);
    const response = await upsertCreatePortfolioBasicData(
      portfolioStackBasicContextData.id,
      portfolioStackBasicContextData.portfolio_palette,
      portfolioStackBasicContextData.portfolio_font_primary,
      portfolioStackBasicContextData.portfolio_font_secondary,
      portfolioStackBasicContextData.projects_design,
      portfolioStackBasicContextData.projects_alignment,
      portfolioStackBasicContextData.experience_alignment
    );
    console.log(response);
    setPortfolioStackBasicContextData(response.portfolio);
    setIsPending(false);
  };

  return (
    <div className="p-6 flex flex-col gap-8">
      <div className="flex justify-between gap-2">
        <h2 className="text-2xl items-center flex md:text-4xl font-bold">
          5. Customize portfolio
        </h2>
        <button
          className="btn btn-secondary w-24 btn-outline"
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
        <h3 className="text-xl md:text-2xl font-bold">
          5.1. Select portfolio color palette
        </h3>
        <Join
          disabled={isPending}
          value={portfolioStackBasicContextData.portfolio_palette}
          items={portfolioPaletteItemsData}
          onChange={(e) => {
            handleUpdate("portfolio_palette", e.target.value);
          }}
          name={"portfolio_palette"}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl md:text-2xl font-bold">
          5.2. Select primary font
        </h3>
        <Join
          disabled={isPending}
          value={portfolioStackBasicContextData.portfolio_font_primary}
          items={portfolioFontItemsData}
          onChange={(e) => {
            handleUpdate("portfolio_font_primary", e.target.value);
          }}
          name={"portfolio_font_primary"}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl md:text-2xl font-bold">
          5.3. Select secondary font
        </h3>
        <Join
          disabled={isPending}
          value={portfolioStackBasicContextData.portfolio_font_secondary}
          items={portfolioFontItemsData}
          onChange={(e) => {
            handleUpdate("portfolio_font_secondary", e.target.value);
          }}
          name={"portfolio_font_secondary"}
        />
      </div>{" "}
      <div className="flex flex-col gap-4">
        <h3 className="text-xl md:text-2xl font-bold">
          5.4. Select projects design
        </h3>
        <Join
          disabled={isPending}
          value={portfolioStackBasicContextData.projects_design}
          items={projectDesignsItemsData}
          onChange={(e) => {
            handleUpdate("projects_design", e.target.value);
          }}
          name={"projects_design"}
        />
        {(portfolioStackBasicContextData.projects_design == "Design 1" ||
          portfolioStackBasicContextData.projects_design == "Design 4") && (
          <Join
            disabled={isPending}
            value={portfolioStackBasicContextData.projects_alignment}
            items={projectsAlignmentItemsData}
            onChange={(e) => {
              handleUpdate("projects_alignment", e.target.value);
            }}
            name={"projects_alignment"}
          />
        )}
      </div>{" "}
      <div className="flex flex-col gap-4">
        <h3 className="text-xl md:text-2xl font-bold">
          5.5. Select timeline layout
        </h3>
        <Join
          disabled={isPending}
          value={portfolioStackBasicContextData.experience_alignment}
          items={experienceAlignmentItemsData}
          onChange={(e) => {
            handleUpdate("experience_alignment", e.target.value);
          }}
          name={"experience_alignment"}
        />
      </div>
      <NextPreviousNavigation
        setIsPending={setIsPending}
        disabled={isPending}
        handleNextClick={saveData}
        previousUrl={"/builder/add-activities"}
        nextUrl={"/builder/deploy-portfolio"}
      />
    </div>
  );
};

export default BasicInfo;
