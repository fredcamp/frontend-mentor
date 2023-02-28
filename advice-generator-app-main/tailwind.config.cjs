/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{svelte,ts}'],
  theme: {
    colors: {
      currentColor: colors.currentColor,
      transparent: colors.transparent,
      white: 'hsl(193, 38%, 86%)',
      neon: 'hsl(150, 100%, 66%)',
      'gray-blue': 'hsl(217, 19%, 38%)',
      'dark-gray-blue': 'hsl(217, 19%, 24%)',
      'dark-blue': 'hsl(218, 23%, 16%)',
    },
    extend: {
      fontFamily: {
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        custom: `0 0 2rem ${colors.neon}`,
      },
    },
  },
  plugins: [],
}
