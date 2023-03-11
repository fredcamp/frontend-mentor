/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{svelte,ts}'],
  theme: {
    colors: {
      currentColor: colors.currentColor,
      transparent: colors.transparent,
      cyan: {
        primary: 'hsl(180, 29%, 50%)',
        'gray-light-bg': 'hsl(180, 52%, 96%)',
        'gray-light-tab': 'hsl(180, 31%, 95%)',
        'dark-gray': 'hsl(180, 8%, 52%)',
        'darker-gray': 'hsl(180, 14%, 20%)',
      },
    },
    extend: {
      fontFamily: {
        sans: ['League Spartan', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'header-desktop': 'url("/images/bg-header-desktop.svg")',
        'header-mobile': 'url("/images/bg-header-mobile.svg")',
      },
    },
  },
  plugins: [],
}
