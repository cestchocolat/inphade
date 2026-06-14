import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        brandNavy: "#071538",
        muted: "#64748B",
        line: "#E5E7EB",
        soft: "#F8FAF7",
        accent: "#176C4B"
      },
      boxShadow: {
        premium: "0 24px 80px rgba(15, 23, 42, 0.10)",
        glow: "0 24px 70px rgba(23, 108, 75, 0.16)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};

export default config;
