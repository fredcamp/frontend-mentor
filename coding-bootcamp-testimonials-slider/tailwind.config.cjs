/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{svelte,ts,js}'],
  theme: {
    colors: {
      transparent: 'transparent',
      currentColor: 'currentColor',
      white: colors.white,
      gray: 'hsl(240, 18%, 77%)',
      blue: 'hsl(240, 38%, 20%)',
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
}
