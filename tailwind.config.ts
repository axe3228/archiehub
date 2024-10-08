import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: '428px',
      ...defaultTheme.screens,
      '3xl': '1920px',
    },
    colors: {
      ...colors,
      'primary': '#FF520E',
      'crystal-white': '#eeeeff33'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['var(--font-montserrat)'],
        montez: ['var(--font-montez)']
      },
      animation: {
        slide: "slide .2s linear forwards",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateY(0)"},
          "100%": { transform: "translateY(-100%)"},
        },
      },
    },
  },
  plugins: [],
};
export default config;
