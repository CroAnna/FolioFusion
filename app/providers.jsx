"use client";

import { PortfolioProvider } from "./_components/PortfolioProvider";
import { IconsProvider } from "./context/iconsContext";

const Providers = ({ children }) => {
  return (
    <IconsProvider>
      <PortfolioProvider>{children}</PortfolioProvider>
    </IconsProvider>
  );
};

export default Providers;
