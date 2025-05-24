import React from "react";
import ErrorPage from "../_components/ErrorPage";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <ErrorPage
        errorData={{
          code: 404,
          message: "Portfolio with that domain does not exist yet. 😕",
        }}
      />
    </div>
  );
};

export default NotFound;
