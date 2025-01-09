/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hero: ["Abril Fatface", "serif"],
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        mono: ["Space Mono", "sans-serif"],
      },
    },
  },
  plugins: [],
};
