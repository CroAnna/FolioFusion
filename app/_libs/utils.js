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
  ${palette == "Palette 1" && "bg-zinc-100 text-gray-600"} 
  ${palette == "Palette 4" && "bg-slate-800 text-gray-50"} 
  ${palette == "Palette 3" && "bg-orange-50 text-amber-900"} 
  ${palette == "Palette 2" && "bg-sky-50 text-gray-800"} 
  ${palette == "Palette 5" && "bg-neutral-900 text-gray-100"}
  ${palette == "Palette 6" && "bg-stone-900 text-gray-100"}`;
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
