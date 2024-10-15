/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: "#0E1217",
          textHightLight: "#E96AF0",
          default: "#E3E3E3",
          dark: "#CCD6F6",
          light: "#D8D8D8",
          darkText: "#444746",
          blade: "#64FFDA",
          textLight: "#FFFFFF",
          textDimmed: "#898B8D",
        },
      },
      cursor: {
        shake: 'url("./src/assets/groundhog.png"), auto',
      },
      listStyleImage: {
        triangle: 'url("./src/assets/list-icon.png")',
      },
    },
  },
  plugins: [daisyui],
};
