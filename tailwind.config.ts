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
          0: "var(--bg-0)",
          1: "var(--bg-1)",
          2: "var(--bg-2)",
        },
        ink: {
          0: "var(--ink-0)",
          1: "var(--ink-1)",
          2: "var(--ink-2)",
        },
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        accent: {
          DEFAULT: "var(--accent)",
          dim: "var(--accent-dim)",
          ink: "var(--accent-ink)",
        },
        secondary: "var(--secondary)",
        danger: "var(--danger)",
      },
      fontFamily: {
        display: "var(--font-display)",
        body: "var(--font-body)",
        mono: "var(--font-mono)",
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
