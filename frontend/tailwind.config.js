/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#161616",
        "secondary": "#93d8e7",
        "tertiary": "#fff",
        "quaternary": "#1e1e1e",
      },
    },
    screens: {
      lg: {max: "2024px"},
      sm: {max :"1000px"},
    },
  },
  plugins: [],
}