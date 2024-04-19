/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Manually Added
      fontFamily:{
        sans:['Roboto', 'sans-serif']
      },
      gridTemplateColumns:{
        '70/30': '70% 28%', //Intentially left some space
      },
    },
  },
  plugins: [],
}

