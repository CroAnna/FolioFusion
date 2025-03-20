"use client";
import React, { useContext, useEffect, useState } from "react";
import { PortfolioContext } from "./PortfolioProvider";
import PortfolioHero from "./PortfolioHero";
import PortfolioProjects from "./PortfolioProjects";
import PortfolioEducation from "./PortfolioEducation";
import PortfolioActivities from "./PortfolioActivities";
import MadeUsingTag from "./MadeUsingTag";
import { getDataByDomain } from "./actions";
import ScrollToTop from "@/app/_components/ScrollToTop";
import { deepEqual } from "@/utils/common/methods.js";
import ErrorPage from "./ErrorPage";
import { emptyProject } from "../_libs/utils";

const RenderedPortfolio = ({ domain = null }) => {
  const [errorData, setErrorData] = useState(null);
  const {
    portfolioStackBasicContextData,
    portfolioStackHeroContextData,
    portfolioStackProjectsContextData,
    portfolioStackExperienceContextData,
    portfolioStackActivityContextData,
    setPortfolioStackHeroContextData,
    setPortfolioStackExperienceContextData,
    setPortfolioStackProjectsContextData,
    setPortfolioStackActivityContextData,
    setPortfolioStackBasicContextData,
  } = useContext(PortfolioContext);

  useEffect(() => {
    console.log(`domain:${domain}`);

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
      setPortfolioStackBasicContextData(_data.portfolio);
      setPortfolioStackHeroContextData(_data.hero);
      setPortfolioStackProjectsContextData(_data.projects);
      setPortfolioStackActivityContextData(_data.activities);
      setPortfolioStackExperienceContextData(_data.experiences);
    }
  };

  const checkIfportfolioStackHeroContextDataIsDefault = () => {
    const defaultValue = [
      {
        id: null,
        hero_image: null,
        hero_image_rounded: false,
        hero_border_style: "dashed",
        hero_image_border: false,
        hero_extra: false,
        hero_scroll_to_top: false,
        hero_extra_style_elements: "abstract",
        hero_variant: "A",
        hero_welcome: "",
        hero_bg_disabled_mobile: false,
        hero_mobile_alignment: "left",
        hero_desktop_alignment: "left",
        hero_name: "",
        hero_short: "",
        hero_description: "",
        social_github: "",
        social_linkedin: "",
        social_x: "",
        social_facebook: "",
        social_instagram: "",
        social_youtube: "",
        social_tiktok: "",
        social_dribble: "",
        social_other: "",
        project_group_description: "",
        project_group_title: "",
        experience_group_description: "",
        experience_group_title: "",
        activity_bg_shape: "low-poly-grid",
      },
    ];
    return (
      deepEqual(portfolioStackHeroContextData, defaultValue) ||
      deepEqual(portfolioStackHeroContextData, [])
    );
  };

  const checkIfPortfolioStackProjectsContextDataIsDefault = () => {
    const defaultValue = emptyProject;

    return (
      deepEqual(portfolioStackProjectsContextData, defaultValue) ||
      deepEqual(portfolioStackProjectsContextData, [])
    );
  };

  const checkIfPortfolioStackExperienceContextDataIsDefault = () => {
    const defaultValue = [
      {
        id: null,
        experience_order: 1,
        experience_title: "",
        experience_description: "",
        experience_time: "",
        experience_keywords: "",
        experience_type: null,
      },
    ];
    return (
      deepEqual(portfolioStackExperienceContextData, defaultValue) ||
      deepEqual(portfolioStackExperienceContextData, [])
    );
  };

  const checkIfPortfolioStackActivityContextDataIsDefault = () => {
    const defaultValue = [
      {
        id: null,
        activity_order: 1,
        activity_title: "",
        activity_description: "",
        activity_url: "",
        activity_type: null,
        activity_img: "",
      },
    ];
    return (
      deepEqual(portfolioStackActivityContextData, defaultValue) ||
      deepEqual(portfolioStackActivityContextData, [])
    );
  };

  return (
    <div className={`${!domain && "overflow-y-scroll"} h-screen flex flex-col`}>
      {portfolioStackHeroContextData.hero_scroll_to_top && domain && (
        <ScrollToTop />
      )}
      <p className="max-w-6xl break-words">
        {/* {JSON.stringify(portfolioStackBasicContextData)} */}
        {/* {JSON.stringify(portfolioStackHeroContextData)} */}
        {/* {JSON.stringify(portfolioStackProjectsContextData)} */}
        {/* {JSON.stringify(portfolioStackExperienceContextData)} */}
        {/* {JSON.stringify(portfolioStackActivityContextData)} */}
      </p>
      {errorData && errorData.code == 404 && (
        <ErrorPage errorData={errorData} />
      )}
      {!errorData && (
        <>
          {portfolioStackHeroContextData &&
            !checkIfportfolioStackHeroContextDataIsDefault() && (
              <div className="relative">
                <PortfolioHero /> {domain && <MadeUsingTag />}
              </div>
            )}
          {portfolioStackProjectsContextData &&
            !checkIfPortfolioStackProjectsContextDataIsDefault() && (
              <PortfolioProjects />
            )}
          {portfolioStackExperienceContextData &&
            !checkIfPortfolioStackExperienceContextDataIsDefault() && (
              <PortfolioEducation />
            )}
          {portfolioStackActivityContextData &&
            !checkIfPortfolioStackActivityContextDataIsDefault() && (
              <PortfolioActivities />
            )}
        </>
      )}
    </div>
  );
};

export default RenderedPortfolio;
