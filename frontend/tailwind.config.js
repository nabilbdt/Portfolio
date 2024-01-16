/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#000000",
        "secondary": "#427D9D",
        "tertiary": "#9BBEC8",
      },
    },
    screens: {
      lg: {max: "2024px"},
      sm: {max :"1000px"},
    },
  },
  plugins: [],
}