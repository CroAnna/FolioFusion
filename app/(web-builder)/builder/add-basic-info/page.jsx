"use client";
import React, { useCallback, useContext, useEffect } from "react";
import { PortfolioContext } from "@/app/_components/PortfolioProvider";
import { getCreateBasicInfo, upsertCreatePortfolioBasicData } from "./actions";
import NextPreviousNavigation from "@/app/_components/NextPreviousNavigation";
import Join from "@/app/_components/Join";
import { heroPaletteItemsData } from "@/app/_libs/utils";

const BasicInfo = () => {
  const { portfolioStackBasicContextData, setPortfolioStackBasicContextData } =
    useContext(PortfolioContext);

  const handleUpdate = (field, value) => {
    setPortfolioStackBasicContextData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const getBasicInfo = useCallback(async () => {
    const { portfolio, error } = await getCreateBasicInfo();
    if (error) {
      console.log(error);
    } else {
      setPortfolioStackBasicContextData({
        ...portfolioStackBasicContextData,
        id: portfolio.id,
        portfolio_palette: portfolio.portfolio_palette,
      });
    }
  }, []);

  useEffect(() => {
    getBasicInfo();
  }, []);

  const saveData = async () => {
    const response = await upsertCreatePortfolioBasicData(
      portfolioStackBasicContextData.id,
      portfolioStackBasicContextData.portfolio_palette
    );
    console.log(response);
    setPortfolioStackBasicContextData(response.portfolio);
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
        >
          Save
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl md:text-2xl font-bold">
          5.1. Select portfolio color palette
        </h3>
        <Join
          value={portfolioStackBasicContextData.portfolio_palette}
          items={heroPaletteItemsData}
          onChange={(e) => {
            handleUpdate("portfolio_palette", e.target.value);
          }}
          name={"portfolio_palette"}
        />
      </div>
      <NextPreviousNavigation
        handleNextClick={saveData}
        previousUrl={"/builder/add-activities"}
        nextUrl={"/builder/deploy-portfolio"}
      />
    </div>
  );
};

export default BasicInfo;
