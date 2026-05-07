/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jyothi-blue': '#1B2631',
        'jyothi-amber': '#F39C12',
        'jyothi-orange': '#E67E22',
        'brand-text': '#E2E8F0',
        brand: {
          primary: '#1B2631', // Dark Blue/Grey
          secondary: '#F39C12', // Yellow/Orange
          accent: '#E67E22', // Orange
          text: '#E2E8F0', // Slate 200
          light: '#F8F9FA', // Off-white
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
