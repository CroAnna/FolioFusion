import React from "react";
import RenderedPortfolio from "../_components/RenderedPortfolio";
import { checkIfUserHasActivePlan } from "../_components/actionsServer";
import ErrorPage from "../_components/ErrorPage";

const Portfolio = async ({ params }) => {
  const isActive = await checkIfUserHasActivePlan(params.domain, "domain");

  return (
    <div>
      {isActive ? (
        <RenderedPortfolio domain={params.domain} />
      ) : (
        <div className="flex h-screen flex-col">
          <ErrorPage
            errorData={{
              code: 404,
              message: "Portfolio with that domain does not exist yet. 😕",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Portfolio;
