/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brown-600": "#734321",
        "brown-700": "#5C361A",
        "beige-100": "#F5E4C3",
        "beige-300": "#E9C393",
      }
    },
  },
  plugins: [],
};

