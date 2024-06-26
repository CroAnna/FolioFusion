/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["emerald"], //  dark da se automatski mijenja https://daisyui.com/docs/themes/
  },
};
