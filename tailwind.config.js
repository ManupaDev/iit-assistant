/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans':['Roboto']
      },
      colors:{
        'bluegrey-700':'#243B53',
        'bluegrey-600':'#334E68',
        'bluegrey-500':'#486581',
        'bluegrey-400':'#829AB1',
      }
    },
  },
  plugins: [],
}