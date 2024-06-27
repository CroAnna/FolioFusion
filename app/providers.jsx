"use client";
import { PortfolioProvider } from "@/app/_components/PortfolioProvider";

const Providers = ({ children }) => {
  return <PortfolioProvider>{children}</PortfolioProvider>;
};

export default Providers;
