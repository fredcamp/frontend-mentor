/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{ts,svelte}'],
  theme: {
    colors: {
      currentColor: colors.currentColor,
      transparent: colors.transparent,
      orange: 'hsl(35, 77%, 62%)',
      red: 'hsl(5, 85%, 63%)',
      white: 'hsl(36, 100%, 99%)',
      gray: 'hsl(233, 8%, 79%)',
      blue: {
        gray: 'hsl(236, 13%, 42%)',
        dark: 'hsl(240, 100%, 5%)',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
