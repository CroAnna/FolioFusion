import { GithubLogo, Link } from "@phosphor-icons/react/dist/ssr";

export const stepsData = [
  {
    text: "Create hero",
  },
  { text: "Add work/projects" },
  { text: "Add education" },
  { text: "Add other info" },
  { text: "Deploy or download as PDF" },
];
export const heroPaletteItemsData = [
  "Palette 1",
  "Palette 2",
  "Palette 3",
  "Palette 4",
  "Palette 5",
  "Palette 6",
];
export const borderStyleItemsData = ["dashed", "dotted", "solid", "double"];
export const heroExtraElementsData = ["abstract", "dots"];

export const getBgColor = (palette) => {
  return `
  ${palette == "Palette 1" && "bg-zinc-100"} 
  ${palette == "Palette 2" && "bg-sky-50 "} 
  ${palette == "Palette 3" && "bg-orange-50"} 
  ${palette == "Palette 4" && "bg-slate-800"} 
  ${palette == "Palette 5" && "bg-neutral-900"}
  ${palette == "Palette 6" && "bg-stone-900"}`;
};

export const getPrimaryBgColors = (palette) => {
  return `
      ${palette == "Palette 1" && "bg-amber-600"} 
      ${palette == "Palette 2" && "bg-blue-800"} 
      ${palette == "Palette 3" && "bg-orange-800"} 
      ${palette == "Palette 4" && "bg-yellow-400"} 
      ${palette == "Palette 5" && "bg-lime-500"}
      ${palette == "Palette 6" && "bg-yellow-400"}`;
};

export const getSecondaryBgColors = (palette) => {
  return `
      ${palette == "Palette 1" && "bg-white"} 
      ${palette == "Palette 2" && "bg-sky-100"} 
      ${palette == "Palette 3" && "bg-orange-100"} 
      ${palette == "Palette 4" && "bg-slate-900"} 
      ${palette == "Palette 5" && "bg-neutral-800"}
      ${palette == "Palette 6" && "bg-stone-800"}`;
};

export const getPrimaryTextColor = (palette) => {
  return `
  ${palette == "Palette 1" && "text-gray-900"} 
  ${palette == "Palette 2" && "text-gray-800"}
  ${palette == "Palette 3" && "text-amber-900"} 
  ${palette == "Palette 4" && "text-gray-50"}
  ${palette == "Palette 5" && "text-gray-100"}
  ${palette == "Palette 6" && "text-gray-100"}`;
};

export const getSecondaryTextColor = (palette) => {
  return `
  ${palette == "Palette 1" && "text-gray-100"} 
  ${palette == "Palette 2" && "text-gray-100"} 
  ${palette == "Palette 3" && "text-gray-100"} 
  ${palette == "Palette 4" && "text-gray-900"} 
  ${palette == "Palette 5" && "text-gray-900"}
  ${palette == "Palette 6" && "text-gray-900"}`;
};

export const getPrimaryBorderColors = (palette) => {
  return `
      ${palette == "Palette 1" && "border-cyan-900"} 
      ${palette == "Palette 2" && "border-cyan-900"}
      ${palette == "Palette 3" && "border-lime-800"} 
      ${palette == "Palette 4" && "border-amber-200 "} 
      ${palette == "Palette 5" && "border-emerald-500"} 
      ${palette == "Palette 6" && "border-orange-500"}`;
};

export const getPrimaryColors = (palette) => {
  return `
      ${palette == "Palette 1" && "text-amber-600"} 
      ${palette == "Palette 2" && "text-blue-800"} 
      ${palette == "Palette 3" && "text-orange-800"} 
      ${palette == "Palette 4" && "text-yellow-400"} 
      ${palette == "Palette 5" && "text-lime-500"}
      ${palette == "Palette 6" && "text-yellow-400"}`;
};

export const getSecondaryColors = (palette) => {
  return `
      ${palette == "Palette 1" && "text-cyan-900"} 
      ${palette == "Palette 2" && "text-cyan-900"}
      ${palette == "Palette 3" && "text-lime-800"} 
      ${palette == "Palette 4" && "text-amber-200 "} 
      ${palette == "Palette 5" && "text-emerald-500"}  
      ${palette == "Palette 6" && "text-orange-500"}`;
};

export const projectLinkIcons = [
  { value: "-", label: "-", icon: null },
  { value: "github", label: "Github", icon: <GithubLogo size={32} /> },
  { value: "link", label: "Link", icon: <Link size={32} /> },
];
