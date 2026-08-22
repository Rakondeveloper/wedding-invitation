import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "rgb(234, 224, 198)",
          soft: "rgb(242, 234, 212)",
          dark: "rgb(222, 210, 180)",
        },
        sand: {
          DEFAULT: "rgb(224, 212, 184)",
          dark: "rgb(210, 197, 168)",
        },
        bronze: {
          DEFAULT: "#8C6D46",
          dark: "#6B5335",
          light: "#A88555",
        },
        charcoal: {
          DEFAULT: "#2C302E",
          soft: "#4A4E4C",
        },
        matte: {
          DEFAULT: "#0a0c0a",
          light: "#12140f",
          soft: "#181b14",
        },
        gold: {
          DEFAULT: "#c9a24b",
          light: "#e8cd85",
          dim: "#8a713a",
          bright: "#f3dfa8",
        },
        ivory: {
          DEFAULT: "#F5EEDF",
          dim: "#DED6C4",
        },
        emerald: {
          DEFAULT: "rgb(27, 59, 52)",
          deep: "rgb(20, 45, 39)",
          regal: "rgb(27, 59, 52)",
          mid: "rgb(27, 59, 52)",
          light: "rgb(38, 80, 71)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        arabic: ["var(--font-arabic)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        drift: {
          "0%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-14px) translateX(6px)" },
          "100%": { transform: "translateY(0px) translateX(0px)" },
        },
      },
      animation: {
        flicker: "flicker 4s ease-in-out infinite",
        drift: "drift 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
