/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{ts,js,svelte}'],
  theme: {
    colors: {
      transparent: 'transparent',
      currentColor: 'currentColor',
      black: colors.black,
      white: 'hsl(0, 0%, 100%)',
      cyan: {
        DEFAULT: 'hsl(158, 36%, 37%)',
        dark: 'hsl(158, 36%, 20%)',
      },
      cream: 'hsl(30, 38%, 92%)',
      blue: 'hsl(212, 21%, 14%)',
      gray: 'hsl(228, 12%, 48%)',
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        serif: ['Fraunces', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
