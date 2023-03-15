/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{ts,svelte}'],
  theme: {
    colors: {
      transparent: colors.transparent,
      currentColor: colors.currentColor,
      orange: {
        DEFAULT: 'hsl(26, 100%, 55%)',
        pale: 'hsl(25, 100%, 94%)',
      },
      white: 'hsl(0, 0%, 100%)',
      black: 'hsl(0, 0%, 0%)',
      blue: {
        DEFAULT: 'hsl(220, 13%, 13%)',
        'gray-dark': 'hsl(219, 9%, 45%)',
        gray: 'hsl(220, 14%, 75%)',
        light: 'hsl(223, 64%, 98%)',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
