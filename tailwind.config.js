/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jyothi-blue': '#121820', // Refined Architectural Charcoal Slate Grey (matches logo grey palette)
        'jyothi-amber': '#D4AA5B', // Exact Logo Golden Yellow (JC Emblem Gold)
        'jyothi-orange': '#C39845', // Warm Ochre Gold Hover
        'jyothi-green': '#0F7153', // Exact Logo Forest Green (JYOTHI lettering)
        'jyothi-green-dark': '#08503A',
        'jyothi-green-light': '#168F6A',
        'jyothi-grey': '#6C696A', // Exact Logo Living Innovations Grey
        'brand-text': '#E2E8F0',
        brand: {
          primary: '#121820',
          secondary: '#D4AA5B',
          green: '#0F7153',
          grey: '#6C696A',
          accent: '#C39845',
          text: '#E2E8F0',
          light: '#F8F9FA',
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
