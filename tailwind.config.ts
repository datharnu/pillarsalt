const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: { min: "320px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "2778px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
    extend: {
      backgroundImage: {
        bgImg: "url(/background.svg)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
