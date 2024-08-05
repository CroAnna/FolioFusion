"use client";
import React, { useContext, useEffect, useState } from "react";
import { PortfolioContext } from "./PortfolioProvider";
import PortfolioHero from "./PortfolioHero";
import PortfolioProjects from "./PortfolioProjects";
import PortfolioEducation from "./PortfolioEducation";
import PortfolioActivities from "./PortfolioActivities";
import { getDataByDomain } from "./actions";
import ScrollToTop from "@/app/_components/ScrollToTop";
import Image from "next/image";
import errorImage from "@/public/404-error.png";

const RenderedPortfolio = ({ domain = null }) => {
  const [errorData, setErrorData] = useState(null);
  const {
    portfolioStackContextData,
    portfolioStackProjectsContextData,
    portfolioStackExperienceContextData,
    portfolioStackActivityContextData,
    setPortfolioStackContextData,
    setPortfolioStackExperienceContextData,
    setPortfolioStackProjectsContextData,
    setPortfolioStackActivityContextData,
  } = useContext(PortfolioContext);

  useEffect(() => {
    console.log(domain);

    if (domain) {
      // it's deployed portfolio, otherwise it's builder
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    const _data = await getDataByDomain(domain);
    if (_data.code && _data.code == 404) {
      setErrorData(_data);
    } else {
      setPortfolioStackContextData(_data.portfolio);
      setPortfolioStackProjectsContextData(_data.projects);
      setPortfolioStackActivityContextData(_data.activities);
      setPortfolioStackExperienceContextData(_data.experiences);
    }
  };

  return (
    <div className={`${!domain && "overflow-y-scroll"} h-screen flex flex-col`}>
      {portfolioStackContextData.hero_scroll_to_top && domain && (
        <ScrollToTop />
      )}
      <p className="max-w-6xl break-words">
        {/* {JSON.stringify(portfolioStackContextData)} */}
        {/* {JSON.stringify(portfolioStackProjectsContextData)} */}
        {/* {JSON.stringify(portfolioStackExperienceContextData)} */}
        {/* {JSON.stringify(portfolioStackActivityContextData)} */}
      </p>
      {errorData && errorData.code == 404 && (
        <div className="flex flex-col gap-8 justify-center items-center h-full">
          <Image
            src={errorImage}
            alt="404-not-found"
            width={256}
            height={256}
          />
          <p className=" text-3xl">{errorData.message}</p>
        </div>
      )}
      {!errorData && (
        <>
          {portfolioStackContextData && <PortfolioHero />}
          {portfolioStackProjectsContextData && <PortfolioProjects />}
          {portfolioStackExperienceContextData && <PortfolioEducation />}
          {portfolioStackActivityContextData && <PortfolioActivities />}
        </>
      )}
    </div>
  );
};

export default RenderedPortfolio;
