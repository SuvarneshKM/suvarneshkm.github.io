/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        dm_sans: "'DM Sans', sans-serif",
      },
      colors: {
        primary: "#FFE653",
        secondary: "#74E7D2",
        background: "#EEEBE7",
      },
      keyframes: {
        tinkerer: {
          "0%": {
            right: "0",
            top: "-32px",
          },
          "5%": {
            right: "0",
            top: "-32px",
            transformOrigin: "0 0",
            transform: "scaleX(0.85)",
          },
          "25%": {
            transform: "scaleX(1.05), skewX(-3deg)",
          },
          "50%": {
            right: "20px",
            transform: "scaleX(1), skewX(0deg)",
          },
          "55%": {
            right: "20px",
            transformOrigin: "100% 0",
            transform: "scaleX(0.9)",
          },
          "75%": {
            transform: "scaleX(1.05), skewX(3deg)",
          },
          "100%": {
            right: "0",
            transform: "scaleX(1), skewX(0deg)",
          },
        },
        tinkererMin: {
          "0%": {
            right: "0",
            top: "0px",
          },
          "5%": {
            right: "0",
            top: "0px",
            transformOrigin: "0 0",
            transform: "scaleX(0.85)",
          },
          "25%": {
            transform: "scaleX(1.05), skewX(-3deg)",
          },
          "50%": {
            right: "20px",
            transform: "scaleX(1), skewX(0deg)",
          },
          "55%": {
            right: "20px",
            transformOrigin: "100% 0",
            transform: "scaleX(0.9)",
          },
          "75%": {
            transform: "scaleX(1.05), skewX(3deg)",
          },
          "100%": {
            right: "0",
            transform: "scaleX(1), skewX(0deg)",
          },
        },
        human: {
          "0%": {
            right: "-16px",
            top: "-16px",
          },
          "5%": {
            right: "-16px",
            top: "-16px",
            transformOrigin: "0 0",
            transform: "scaleX(0.85)",
          },
          "25%": {
            transform: "scaleX(1.05), skewX(-3deg)",
          },
          "50%": {
            right: "0",
            top: "-8px",
            transform: "scaleX(1), skewX(0deg)",
          },
          "55%": {
            right: "0",
            top: "-8px",
            transformOrigin: "100% 0",
            transform: "scaleX(0.9)",
          },
          "75%": {
            transform: "scaleX(1.05), skewX(3deg)",
          },
          "100%": {
            right: "-16px",
            transform: "scaleX(1), skewX(0deg)",
          },
        },
        coding: {
          "0%": {
            right: "50%",
            top: "32px",
          },
          "5%": {
            right: "50%",
            top: "32px",
            transformOrigin: "0 0",
          },
          "25%": {
            transform: "skewX(-3deg)",
          },
          "50%": {
            right: "75%",
            top: "26px",
            transform: "skewX(0deg)",
          },
          "55%": {
            right: "75%",
            top: "26px",
            transformOrigin: "100% 0",
          },
          "75%": {
            transform: "skewX(3deg)",
          },
          "100%": {
            right: "50%",
            top: "32px",
            transform: "skewX(0deg)",
          },
        },
        design: {
          "0%": {
            right: "0",
            top: "20px",
          },
          "5%": {
            right: "0",
            top: "20px",
            transformOrigin: "0 0",
            transform: "scaleX(0.85)",
          },
          "25%": {
            transform: "scaleX(1.05), skewX(-3deg)",
          },
          "50%": {
            top: "0",
            transform: "scaleX(1), skewX(0deg)",
          },
          "55%": {
            top: "0",
            transformOrigin: "100% 0",
            transform: "scaleX(0.9)",
          },
          "75%": {
            transform: "scaleX(1.05), skewX(3deg)",
          },
          "100%": {
            top: "20px",
            transform: "scaleX(1), skewX(0deg)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        tinkerer: "tinkerer 5s linear infinite",
        tinkererMin: "tinkererMin 5s linear infinite",
        human: "human 5s linear infinite",
        coding: "coding 5s linear infinite",
        design: "design 5s linear infinite",
        fadeIn: "fadeIn 0.5s linear",
        fadeInLeft: "fadeInLeft 0.2s linear",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
