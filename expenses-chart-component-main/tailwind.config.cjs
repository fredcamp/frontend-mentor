/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{ts,svelte}'],
  theme: {
    colors: {
      currentColor: colors.currentColor,
      transparent: colors.transparent,
      red: 'hsl(10, 79%, 65%)',
      cyan: 'hsl(186, 34%, 60%)',
      brown: {
        dark: 'hsl(25, 47%, 15%)',
        DEFAULT: 'hsl(28, 10%, 53%)',
      },
      cream: 'hsl(27, 66%, 92%)',
      pale: 'hsl(33, 100%, 98%)',
    },
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
