/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: "#131314",
          light: "#64FFDA",
          default: "#0A192F",
          dark: "#CCD6F6",
        },
      },
    },
  },
  plugins: [],
};
