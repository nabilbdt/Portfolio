/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#000000",
        "secondary": "#0eb96e",
        "tertiary": "#C1F2B0",
      },
    },
    screens: {
      lg: {max: "2024px"},
      sm: {max :"1000px"},
    },
  },
  plugins: [],
}