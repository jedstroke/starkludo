/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        game: "1px 1px #854D15",
      },
      colors: {
        "brown-600": "#734321",
        "brown-700": "#854D15",
        "beige-100": "#F5E4C3",
        "beige-300": "#E9C393",
      },
    },
  },
  plugins: [],
};

