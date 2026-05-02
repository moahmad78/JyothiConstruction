/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jyothi-green': '#006837',
        'brand-text': '#4B4B4B',
        brand: {
          primary: '#006837', // Forest Green
          secondary: '#C5A059', // Gold/Tan
          text: '#4B4B4B', // Slate Grey
          light: '#F8F9FA', // Off-white
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        heading: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
