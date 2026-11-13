/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      // Thème NEUTRE de départ.
      // TODO (Partie 1) : remplacez ces valeurs par les couleurs et les polices de votre univers.
      colors: {
        brand: {
          DEFAULT: "#4B5563",
          dark: "#374151",
          light: "#E5E7EB",
        },
        ink: "#2B2B2B",
        muted: "#545B68",
        ground: "#FFFAF0",
        line: "#D5D9E1",
      },
      fontFamily: {
        display: ["Arial", "sans-serif"],
        body: ["Arial", "sans-serif"],
        mono: ["Courier New", "monospace"],
      },
      borderRadius: {
        card: "20px",
      },
    },
  },
  plugins: [],
};
