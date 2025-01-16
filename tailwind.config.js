/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "-translate-x-[0%]",
    "-translate-x-[100%]",
    "-translate-x-[200%]",
    "-translate-x-[300%]",
    "-translate-x-[400%]",
    "-translate-x-[500%]",
    "-translate-x-[600%]",
    "-translate-x-[700%]",
    "-translate-x-[800%]",
    "-translate-x-[900%]",
  ],
  theme: {
    extend: {
      fontFamily: {
        hero: ["Abril Fatface", "serif"],
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        mono: ["Space Mono", "sans-serif"],
      },
      colors: {
        onahau: {
          50: "#ecfdff",
          100: "#cdf6fe",
          200: "#a5ecfc",
          300: "#67ddf9",
          400: "#22c3ee",
          500: "#06a6d4",
          600: "#0884b2",
          700: "#0e6a90",
          800: "#155675",
          900: "#164863",
          950: "#082e44",
        },
      },
    },
  },
  plugins: [],
};
