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
        brand: {
          bg: "#FDF8FA",
          "soft-pink": "#F8DDE8",
          "soft-pink-light": "#FCF0F5",
          "rose-pink": "#D987AA",
          "dusty-pink": "#C77D9A",
          "deep-rose": "#A45075",
          charcoal: "#30232B",
          "muted-gray": "#777078",
          "card-bg": "#FFFFFF",
          "border-pink": "#F3D3E2",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(217, 135, 170, 0.12)",
        "soft-lg": "0 20px 40px -15px rgba(217, 135, 170, 0.2)",
        glow: "0 0 25px rgba(248, 221, 232, 0.6)",
      },
      backgroundImage: {
        "soft-gradient": "linear-gradient(135deg, #FDF8FA 0%, #FAF0F4 50%, #F8DDE8 100%)",
        "hero-gradient": "linear-gradient(180deg, #FDF8FA 0%, #FBF1F5 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
