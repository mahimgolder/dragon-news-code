/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        "poppins" : ["Poppins", "serif"],
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'], // এখানে 'light' বা পছন্দের থিম দিন
  },
}