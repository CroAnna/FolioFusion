import React from "react";
import RenderedPortfolio from "../_components/RenderedPortfolio";

const Portfolio = ({ params }) => {
  return (
    <div>
      <RenderedPortfolio domain={params.domain}/>
    </div>
  );
};

export default Portfolio;
