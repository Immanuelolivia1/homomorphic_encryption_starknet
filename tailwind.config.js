/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        darkPrimary: "#121212",
        darkSecondary: "#262626",
        ashPrimary: "#727272",
        ashSecondary: "#636262",
      },
    },
  },
  plugins: [],
};
