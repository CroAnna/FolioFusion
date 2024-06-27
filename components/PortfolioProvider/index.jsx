"use client";
import { createContext, useState } from "react";

const PortfolioContext = createContext({
  portfolioStackContextData: [],
  setPortfolioStackContextData: () => {},
});

const PortfolioProvider = ({ children }) => {
  const [portfolioStackContextData, setPortfolioStackContextData] = useState(
    []
  );

  return (
    <PortfolioContext.Provider
      value={{ portfolioStackContextData, setPortfolioStackContextData }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export { PortfolioProvider, PortfolioContext };
