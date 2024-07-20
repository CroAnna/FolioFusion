import React, { createContext, useState } from "react";

const PortfolioContext = createContext({
  portfolioStackContextData: {},
  setPortfolioStackContextData: () => {},
  portfolioStackProjectsContextData: [],
  setPortfolioStackProjectsContextData: () => {},
  portfolioStackTimelineContextData: [],
  setPortfolioStackTimelineContextData: () => {},
  portfolioStackActivityContextData: [],
  setPortfolioStackActivityContextData: () => {},
  resetContextValues: () => {},
});

const PortfolioProvider = ({ children }) => {
  const [portfolioStackContextData, setPortfolioStackContextData] = useState({
    hero_image: null,
    hero_image_rounded: false,
    hero_border_style: "dashed",
    hero_image_border: false,
    hero_extra: false,
    hero_palette: "Palette 1",
    hero_extra_style_elements: "abstract",
    hero_welcome: "",
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
    timeline_group_description: "",
    timeline_group_title: "",
    activity_bg_shape: "low-poly-grid",
  });

  const [
    portfolioStackProjectsContextData,
    setPortfolioStackProjectsContextData,
  ] = useState([
    {
      project_id: 1,
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
  ]);

  const [
    portfolioStackTimelineContextData,
    setPortfolioStackTimelineContextData,
  ] = useState([
    {
      timeline_id: 1,
      timeline_title: "",
      timeline_description: "",
      timeline_time: "",
      timeline_keywords: "",
      timeline_type: null,
    },
  ]);

  const [
    portfolioStackActivityContextData,
    setPortfolioStackActivityContextData,
  ] = useState([
    {
      activity_id: 1,
      activity_title: "",
      activity_description: "",
      activity_type: null,
      activity_img: "",
    },
  ]);

  const resetContextValues = () => {
    console.log("ciscenje");
    setPortfolioStackContextData({
      hero_image: null,
      hero_image_rounded: false,
      hero_border_style: "dashed",
      hero_image_border: false,
      hero_extra: false,
      hero_palette: "Palette 1",
      hero_extra_style_elements: "abstract",
      hero_welcome: "",
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
      timeline_group_description: "",
      timeline_group_title: "",
      activity_bg_shape: "low-poly-grid",
    });

    setPortfolioStackProjectsContextData([
      {
        project_id: 1,
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
    ]);

    setPortfolioStackTimelineContextData([
      {
        timeline_id: 1,
        timeline_title: "",
        timeline_description: "",
        timeline_time: "",
        timeline_keywords: "",
        timeline_type: null,
      },
    ]);

    setPortfolioStackActivityContextData([
      {
        activity_id: 1,
        activity_title: "",
        activity_description: "",
        activity_type: null,
        activity_img: "",
      },
    ]);
  };

  return (
    <PortfolioContext.Provider
      value={{
        portfolioStackContextData,
        setPortfolioStackContextData,
        portfolioStackProjectsContextData,
        setPortfolioStackProjectsContextData,
        portfolioStackTimelineContextData,
        setPortfolioStackTimelineContextData,
        portfolioStackActivityContextData,
        setPortfolioStackActivityContextData,
        resetContextValues,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export { PortfolioProvider, PortfolioContext };
