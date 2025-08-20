// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",   // if you have an /app dir
  ],
  theme: {
    extend: {
      borderRadius: { xl: "var(--radius)", "2xl": "calc(var(--radius) + 6px)" },
      boxShadow: { "brand-hero": "0 20px 60px -15px rgba(30, 64, 175, 0.35)" },
    },
  },
  plugins: [],
};
