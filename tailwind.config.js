/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: "#131314",
          default: "#0A192F",
          dark: "#CCD6F6",
          light: "#D8D8D8",
          darkText: "#444746",
        },
      },
    },
  },
  plugins: [],
};
