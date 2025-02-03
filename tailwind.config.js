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
  theme: {},
  plugins: [],
};
