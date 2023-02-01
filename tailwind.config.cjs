const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      // 背景（background）；例：`class="bg-bg-lighter"`
      bg: {
        lightest: colors.white,
        lighter: "#f5f5f5",
        light: "#e6e6e6",
        DEFAULT: colors.red,
        dark: "#26292b",
        darker: "#1e2021",
        darkest: colors.black,
      },
      // 前景（foreground）；例：`class="text-fg-lighter"`
      fg: {
        lightest: colors.black,
        lighter: "#1e2021",
        light: "#26292b",
        DEFAULT: colors.red,
        dark: "#e6e6e6",
        darker: "#f5f5f5",
        darkest: colors.white,
      },
      black: colors.black,
      gray: "#1c1c1c",
      white: colors.white,
      arknights: "#22bbff",
      endfield: "#fdfd1f",
    },
    boxShadow: {
      DEFAULT: "0 .5rem .5rem #ffffffCC",
      dark: "0 .5rem .5rem #000000CC",
    },
  },
  plugins: [],
};
