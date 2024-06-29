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
    themes: ["emerald"], //  dark da se automatski mijenja https://daisyui.com/docs/themes/
  },
};
