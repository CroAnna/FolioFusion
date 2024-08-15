"use client";
import ExperienceInputCard from "@/app/_components/ExperienceInputCard";
import Input from "@/app/_components/Input";
import NextPreviousNavigation from "@/app/_components/NextPreviousNavigation";
import { PortfolioContext } from "@/app/_components/PortfolioProvider";
import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  getAddExperiencesSectionData,
  getAddExperiencesData,
  upsertAddExperiencesData,
} from "./actions";
import Image from "next/image";
import loadingGif from "@/public/loading.gif";

const AddEducation = () => {
  const [isPending, setIsPending] = useState(false);

  const {
    portfolioStackHeroContextData,
    portfolioStackExperienceContextData,
    setPortfolioStackHeroContextData,
    setPortfolioStackExperienceContextData,
  } = useContext(PortfolioContext);

  const handleUpdate = (field, value) => {
    setPortfolioStackHeroContextData({
      ...portfolioStackHeroContextData,
      [field]: value,
    });
  };

  const addExperience = () => {
    setPortfolioStackExperienceContextData([
      ...portfolioStackExperienceContextData,
      {
        experience_order:
          portfolioStackExperienceContextData.length > 0
            ? portfolioStackExperienceContextData.slice(-1)[0]
                .experience_order + 1
            : 1,
        experience_title: "",
        experience_description: "",
        experience_time: "",
        experience_keywords: "",
        experience_type: null,
      },
    ]);
  };

  const saveData = async () => {
    setIsPending(true);
    const response = await upsertAddExperiencesData(
      portfolioStackHeroContextData.id,
      portfolioStackHeroContextData.experience_group_description,
      portfolioStackHeroContextData.experience_group_title,
      portfolioStackExperienceContextData
    );
    console.log(response);
    setPortfolioStackExperienceContextData(response.experiences); // sluzi da se ne dogodi da ako se doda experience i samo spremi page (bez prebacivanja dalje) i doda jos jedan experience, prethodno dodani ce se opet dodat (jer mu se id nije azuriral s onim iz baze)
    setIsPending(false);
  };

  const getHero = useCallback(async () => {
    setIsPending(true);
    const { portfolio, error } = await getAddExperiencesSectionData();

    if (error) {
      console.log(error);
    } else {
      setPortfolioStackHeroContextData({
        ...portfolioStackHeroContextData,
        experience_group_description: portfolio.experience_group_description,
        experience_group_title: portfolio.experience_group_title,
      });
    }
    setIsPending(false);
  }, []);

  const getExperiences = useCallback(async () => {
    setIsPending(true);
    const { experiences, error } = await getAddExperiencesData();

    if (error) {
      console.log(error);
    } else if (experiences.length > 0) {
      setPortfolioStackExperienceContextData(experiences);
    }
    setIsPending(false);
  }, []);

  useEffect(() => {
    if (
      portfolioStackHeroContextData.experience_group_title == "" ||
      portfolioStackHeroContextData.experience_group_description == ""
    ) {
      getHero();
    }
    getExperiences();
  }, []);

  return (
    <div className="p-6 flex flex-col gap-4">
      <div className="flex justify-between gap-2">
        <h2 className="text-2xl items-center flex md:text-4xl font-bold">
          3. Add your experience
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
          3.1. Add section title
        </h3>
        <Input
          disabled={isPending}
          name={"experience_group_title"}
          value={portfolioStackHeroContextData.experience_group_title}
          onChange={(e) => {
            handleUpdate("experience_group_title", e.target.value);
          }}
          placeholder={"My work and education"}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl md:text-2xl font-bold">
          3.2. Add section description
        </h3>
        <Input
          disabled={isPending}
          name={"experience_group_description"}
          value={portfolioStackHeroContextData.experience_group_description}
          onChange={(e) => {
            handleUpdate("experience_group_description", e.target.value);
          }}
          placeholder={"This is where I have worked."}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <h3 className="text-xl md:text-2xl font-bold">
            3.3. Add your work experience and education
          </h3>
          <p>(from newest to oldest)</p>
        </div>
        {portfolioStackExperienceContextData &&
          portfolioStackExperienceContextData.length > 0 &&
          portfolioStackExperienceContextData.map(
            (timeline, index) =>
              timeline.experience_order && (
                <ExperienceInputCard
                  setIsPending={setIsPending}
                  disabled={isPending}
                  key={timeline.experience_order}
                  index={index}
                  experienceKey={timeline.experience_order}
                  experienceId={timeline.id}
                />
              )
          )}
        <button
          disabled={isPending}
          className="btn btn-secondary "
          onClick={() => {
            addExperience();
          }}
        >
          Add experience
        </button>
      </div>
      <NextPreviousNavigation
        setIsPending={setIsPending}
        disabled={isPending}
        handleNextClick={saveData}
        nextUrl={"/builder/add-activities"}
        previousUrl={"/builder/add-projects"}
      />
    </div>
  );
};

export default AddEducation;
