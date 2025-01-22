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
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
