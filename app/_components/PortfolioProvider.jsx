import React, { createContext, useState } from "react";
import { emptyExperience, emptyProject } from "../_libs/utils";

const PortfolioContext = createContext({
  portfolioStackBasicContextData: {},
  setPortfolioStackBasicContextData: () => {},
  portfolioStackHeroContextData: {},
  setPortfolioStackHeroContextData: () => {},
  portfolioStackProjectsContextData: [],
  setPortfolioStackProjectsContextData: () => {},
  portfolioStackExperienceContextData: [],
  setPortfolioStackExperienceContextData: () => {},
  portfolioStackActivityContextData: [],
  setPortfolioStackActivityContextData: () => {},
  confettiTriggerState: false,
  setConfettiTriggerState: () => {},
  resetContextValues: () => {},
});

const PortfolioProvider = ({ children }) => {
  const [confettiTriggerState, setConfettiTriggerState] = useState(false);

  const [portfolioStackBasicContextData, setPortfolioStackBasicContextData] =
    useState({
      id: null,
      portfolio_palette: "Palette 1",
      portfolio_font_primary: "gabarito",
      portfolio_font_secondary: "gabarito",
      projects_design: "Design 1",
      activities_design: "Design 1",
      projects_alignment: "left",
      experience_alignment: "2-columns",
    });

  const [portfolioStackHeroContextData, setPortfolioStackHeroContextData] =
    useState({
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
    });

  const [
    portfolioStackProjectsContextData,
    setPortfolioStackProjectsContextData,
  ] = useState(emptyProject);

  const [
    portfolioStackExperienceContextData,
    setPortfolioStackExperienceContextData,
  ] = useState(emptyExperience);

  const [
    portfolioStackActivityContextData,
    setPortfolioStackActivityContextData,
  ] = useState([
    {
      id: null,
      activity_order: 1,
      activity_title: "",
      activity_description: "",
      activity_url: "",
      activity_type: null,
      activity_img: "",
    },
  ]);

  const resetContextValues = () => {
    setPortfolioStackHeroContextData({
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
    });

    setPortfolioStackProjectsContextData(emptyProject);

    setPortfolioStackExperienceContextData(emptyExperience);

    setPortfolioStackActivityContextData([
      {
        id: null,
        activity_order: 1,
        activity_title: "",
        activity_description: "",
        activity_url: "",
        activity_type: null,
        activity_img: "",
      },
    ]);

    setPortfolioStackBasicContextData({
      id: null,
      portfolio_palette: "Palette 1",
      portfolio_font_primary: "gabarito",
      portfolio_font_secondary: "gabarito",
      projects_design: "Design 1",
      activities_design: "Design 1",
      projects_alignment: "left",
      experience_alignment: "2-columns",
    });
  };

  return (
    <PortfolioContext.Provider
      value={{
        portfolioStackBasicContextData,
        setPortfolioStackBasicContextData,
        portfolioStackHeroContextData,
        setPortfolioStackHeroContextData,
        portfolioStackProjectsContextData,
        setPortfolioStackProjectsContextData,
        portfolioStackExperienceContextData,
        setPortfolioStackExperienceContextData,
        portfolioStackActivityContextData,
        setPortfolioStackActivityContextData,
        confettiTriggerState,
        setConfettiTriggerState,
        resetContextValues,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export { PortfolioProvider, PortfolioContext };
