"use client";
import { useContext } from "react";
import { PortfolioContext } from "./PortfolioProvider";

const LogoutButton = () => {
  const { resetContextValues } = useContext(PortfolioContext);

  return (
    <button
      className="btn btn-primary btn-outline"
      type="submit"
      onClick={resetContextValues}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
