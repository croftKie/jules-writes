/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ORANGE: "#F4A261",
      WHITE: "#ebebeb",
      BLACK: "#303030",
      white: "#ebebeb",
      black: "#303030",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
