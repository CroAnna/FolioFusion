/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      inter: ['"Inter"', "sans-serif"],
      poppins: ['"Poppins"', "sans-serif"],
      robotoMono: ['"Roboto Mono"', "sans-serif"],
      greyQo: ['"Grey Qo"', "sans-serif"],
      sankofaDisplay: ['"Sankofa Display"', "sans-serif"],
      gabarito: ['"Gabarito"', "sans-serif"],
      montserrat: ['"Montserrat"', "sans-serif"],
    },
    extend: {
      boxShadow: {
        "custom-sm": "0 0 3px #85888c",
        "custom-lg": "0 0 10px #85888c",
      },
      colors: {
        "bg-dark": "#171717",
        "grey-dark": "#212121",
        "grey-dark": "#1e1e1e",
        "light-blue": "#06b6d4",
        "light-green": "#4ade80",
        "middle-green": "#00d4af",
        "middle-blue": "#00c7c9",
        "text-primary": "#cfcfcd",
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
