/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#A855F7",
          pink: "#EC4899",
        },
        ink: {
          DEFAULT: "#05000a",
          panel: "#0a0014",
        },
      },
      fontFamily: {
        display: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
        sans: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
