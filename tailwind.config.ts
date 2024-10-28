import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#009760",
        blue: "#1A364C",
        orange: "#DC840A",
        ratingText: "#222222",
        ratingStar: "#F7B559",
        priceText: "#1A364C",
      },
    },
  },
  plugins: [],
};
export default config;
