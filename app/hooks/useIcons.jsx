import { useContext } from "react";
import { IconsContext } from "../context/iconsContext";

export const useIcons = () => {
  const context = useContext(IconsContext);
  if (!context) {
    throw new Error("useIcons must be used within an IconsProvider");
  }
  return context;
};
