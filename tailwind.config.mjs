// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
    theme: {
      extend: {
        borderRadius: {
          xl: "var(--radius)",
          "2xl": "calc(var(--radius) + 6px)",
        },
        boxShadow: {
          "brand-hero": "0 20px 60px -15px rgba(30, 64, 175, 0.35)",
        },
      },
    },
    plugins: [],
  };
  