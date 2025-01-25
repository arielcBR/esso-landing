/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '90rem',
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      }
    },
  },
  plugins: [],
}