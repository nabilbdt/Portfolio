/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#000000",
        "secondary": "#7FC7D9",
        "tertiary": "#0F1035",
        "quaternary": "#000000",
      },
    },
    screens: {
      lg: {max: "2024px"},
      sm: {max :"1000px"},
    },
  },
  plugins: [],
}