/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-sm": "0 0 3px #85888c",
        "custom-lg": "0 0 10px #85888c",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        custom: {
          primary: "#06b6d4",
          secondary: "#4ade80",
          accent: "#5b21b6",
          neutral: "#3d4451",
          "base-100": "#262626",
        },
      },
    ], //  dark da se automatski mijenja https://daisyui.com/docs/themes/
  },
};
