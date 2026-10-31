import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FCFAF6",
          100: "#F7F3EB",
          200: "#EFE8DA",
          300: "#E2D6C0",
        },
        rose: {
          50: "#FAF5F5",
          100: "#F5E9EA",
          200: "#EBCFD2",
          300: "#DEAFB4",
          400: "#CE8B92",
          500: "#B86B74",
          600: "#9C525B",
        },
        taupe: {
          50: "#F9F8F7",
          100: "#EFECE8",
          200: "#DDD7D1",
          500: "#7A6B63",
          700: "#544740",
          800: "#3D322C",
          900: "#271E19",
        },
        gold: {
          300: "#F2DC9B",
          400: "#E3C774",
          500: "#C9A74E",
          600: "#A88734",
          700: "#7F6420",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 10px 30px -10px rgba(61, 50, 44, 0.08)",
        "luxury-hover": "0 20px 40px -15px rgba(184, 107, 116, 0.18)",
        gold: "0 8px 24px -6px rgba(201, 167, 78, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
