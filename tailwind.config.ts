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
        cream: "#F5F0DC",
        "soft-yellow": "#F2E879",
        olive: "#8B8848",
        teal: "#5FBFB3",
        charcoal: "#3A3A3A",
        "warm-white": "#FAF8F2",
        "deep-cream": "#EDE8D0",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ['"Jost"', '"Helvetica Neue"', "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
        ultrawide: "0.3em",
      },
      maxWidth: {
        prose: "65ch",
      },
    },
  },
  plugins: [],
};
export default config;
