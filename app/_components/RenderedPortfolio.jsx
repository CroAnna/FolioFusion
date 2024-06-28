import React, { useContext } from "react";
import { PortfolioContext } from "./PortfolioProvider";
import PortfolioHero from "./PortfolioHero";

const RenderedPortfolio = () => {
  const { portfolioStackContextData } = useContext(PortfolioContext);

  return (
    <div>
      {/* <p>{JSON.stringify(portfolioStackContextData)}</p> */}
      <PortfolioHero
        name={portfolioStackContextData.hero_name}
        description={portfolioStackContextData.hero_description}
        img={portfolioStackContextData.hero_image}
        palette={portfolioStackContextData.hero_palette}
        image_rounded={portfolioStackContextData.hero_image_rounded}
        image_border={portfolioStackContextData.hero_image_border}
        welcome={portfolioStackContextData.hero_welcome}
        short={portfolioStackContextData.hero_short}
        border_style={portfolioStackContextData.hero_border_style}
        extra_elements={portfolioStackContextData.hero_extra}
        extra_style_elements={
          portfolioStackContextData.hero_extra_style_elements
        }
      />
    </div>
  );
};

export default RenderedPortfolio;
