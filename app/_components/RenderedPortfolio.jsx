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
import { deepEqual } from "@/utils/common/methods.js";

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

  const checkIfPortfolioStackContextDataIsDefault = () => {
    const defaultValue = [
      {
        id: null,
        hero_image: null,
        hero_image_rounded: false,
        hero_border_style: "dashed",
        hero_image_border: false,
        hero_extra: false,
        hero_scroll_to_top: false,
        hero_palette: "Palette 1",
        hero_extra_style_elements: "abstract",
        hero_variant: "A",
        hero_welcome: "",
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
      deepEqual(portfolioStackContextData, defaultValue) ||
      deepEqual(portfolioStackContextData, [])
    );
  };

  const checkIfPortfolioStackProjectsContextDataIsDefault = () => {
    const defaultValue = [
      {
        id: null,
        project_order: 1,
        project_title: "",
        project_description: "",
        project_technology_1_icon: "",
        project_technology_2_icon: "",
        project_technology_3_icon: "",
        project_technology_4_icon: "",
        project_technology_5_icon: "",
        project_link_1_url: "",
        project_link_2_url: "",
        project_link_1_text: "",
        project_link_2_text: "",
        project_link_1_icon: "",
        project_link_2_icon: "",
        project_img: "",
      },
    ];

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
          {portfolioStackContextData &&
            !checkIfPortfolioStackContextDataIsDefault() && <PortfolioHero />}
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
