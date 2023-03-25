/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'low': 'spin 2s linear infinite'
      }
    },
  },
  plugins: [],
}
