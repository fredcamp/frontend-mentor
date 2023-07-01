/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{js,svelte}'],
  theme: {
    colors: {
      currentColor: colors.currentColor,
      transparent: colors.transparent,
      red: 'hsl(0, 100%, 67%)',
      yellow: 'hsl(39, 100%, 56%)',
      green: 'hsl(166, 100%, 37%)',
      blue: {
        DEFAULT: 'hsl(234, 85%, 45%)',
        slate: 'hsl(252, 100%, 67%)',
        royal: 'hsl(241, 81%, 54%)',
        violet: 'hsla(256, 72%, 46%, 1)',
        persian: 'hsla(241, 72%, 46%, 0)',
      },
      white: 'hsl(0, 0%, 100%)',
      pale: 'hsl(221, 100%, 96%)',
      lavender: 'hsl(241, 100%, 89%)',
      gray: 'hsl(224, 30%, 27%)',
    },
    extend: {
      fontFamily: {
        sans: ['Hanken Grotesk', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
