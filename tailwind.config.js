/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const disableCss = {
  "code::before": false,
  "code::after": false,
};

module.exports = {
  darkMode: "class",
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: "100%",
        xl: "1024px",
        "2xl": "1280px",
      },
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            ...disableCss,
            a: {
              color: "rgb(0,113,230)",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
          },
        },
      },
      fontFamily: {
        open: ["Open Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar")({nocompatible: true}),
  ],
};
