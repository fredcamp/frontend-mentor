/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html','./src/**/*.{svelte,ts,js}'],
  theme: {
    colors: {
      orange: 'hsl(25, 97%, 53%)',
      white: 'hsl(0, 0%, 100%)',
      gray: {
        DEFAULT: 'hsl(217, 12%, 63%)',
        dark: 'hsl(216, 12%, 54%)'
      },
      blue: {
        DEFAULT: 'hsl(213, 19%, 18%)',
        dark: 'hsl(216, 12%, 8%)'
      }
    },
    extend: {
      fontFamily: {
        'sans': ['Overpass', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
