import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"]
      },
      colors: {
        ink: "#060914",
        panel: "#0d1224",
        line: "rgba(255,255,255,0.12)"
      },
      boxShadow: {
        glow: "0 24px 80px rgba(70, 91, 255, 0.26)",
        soft: "0 18px 60px rgba(0,0,0,0.35)"
      }
    }
  },
  plugins: []
};

export default config;
