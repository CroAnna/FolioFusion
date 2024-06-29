"use client";
import { createContext, useState } from "react";

const PortfolioContext = createContext({
  portfolioStackContextData: {},
  setPortfolioStackContextData: () => {},
});

const PortfolioProvider = ({ children }) => {
  const [portfolioStackContextData, setPortfolioStackContextData] = useState(
    {}
  );

  const [
    portfolioStackProjectsContextData,
    setPortfolioStackProjectsContextData,
  ] = useState([
    {
      project_id: 1,
      project_title: "",
      project_descrtiption: "",
      project_technologies: "",
      project_link_1_url: "",
      project_link_2_url: "",
      project_link_1_text: "",
      project_link_2_text: "",
      project_link_1_icon: "",
      project_link_2_icon: "",
      project_img: "",
    },
  ]);

  return (
    <PortfolioContext.Provider
      value={{
        portfolioStackContextData,
        setPortfolioStackContextData,
        portfolioStackProjectsContextData,
        setPortfolioStackProjectsContextData,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export { PortfolioProvider, PortfolioContext };
