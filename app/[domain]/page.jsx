import React from "react";
import { notFound } from "next/navigation";
import RenderedPortfolio from "../_components/RenderedPortfolio";
import { checkIfUserHasActivePlan } from "../_components/actionsServer";

const Portfolio = async ({ params }) => {
  const isActive = await checkIfUserHasActivePlan(params.domain, "domain");

  if (!isActive) {
    notFound();
  }

  return <RenderedPortfolio domain={params.domain} />;
};

export default Portfolio;
