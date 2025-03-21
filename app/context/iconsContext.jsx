"use client";
import { createContext, useEffect, useState } from "react";
import { getIcons } from "../_components/actions";

export const IconsContext = createContext(null);

export const IconsProvider = ({ children }) => {
  const [icons, setIcons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchIcons();
  }, []);

  const fetchIcons = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getIcons();
      setIcons(response.icons);
    } catch (err) {
      setError("Failed to fetch icons");
      console.error("Error fetching icons:", err);
    } finally {
      console.log(icons);

      setIsLoading(false);
    }
  };

  return (
    <IconsContext.Provider value={{ icons, isLoading, error }}>
      {children}
    </IconsContext.Provider>
  );
};
