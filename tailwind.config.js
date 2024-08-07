/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: "#131314",
          default: "#E3E3E3",
          dark: "#CCD6F6",
          light: "#D8D8D8",
          darkText: "#444746",
          blade: "#64FFDA",
        },
      },
    },
  },
  plugins: [],
};
