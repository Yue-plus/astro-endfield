const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      black: colors.black,
      gray: "#1c1c1c",
      white: colors.white,
      arknights: "#22bbff",
      endfield: "#fdfd1f",
    }
  },
  plugins: [],
};
