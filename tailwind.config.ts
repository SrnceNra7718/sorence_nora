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
        bg: {
          0: "#08090B",
          1: "#0D0F12",
          2: "#141619",
        },
        ink: {
          0: "#F3F1EC",
          1: "#A6A39B",
          2: "#706D66",
        },
        line: "rgba(243,241,236,0.10)",
        "line-strong": "rgba(243,241,236,0.18)",
        accent: {
          DEFAULT: "#E8A33D",
          dim: "#B97F2C",
          ink: "#1A1200",
        },
        secondary: "#6E86A6",
        danger: "#C4634A",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      maxWidth: {
        content: "1280px",
      },
      borderRadius: {
        DEFAULT: "2px",
      },
      keyframes: {
        circuitPulse: {
          "0%, 100%": { opacity: "0.18", r: "9" },
          "50%": { opacity: "0.4", r: "13" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        circuitPulse: "circuitPulse 2.2s ease-in-out infinite",
        fadeInUp: "fadeInUp 0.8s cubic-bezier(.16,.84,.32,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
