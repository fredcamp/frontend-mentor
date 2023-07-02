/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{js,svelte}'],
  theme: {
    colors: {
      currentColor: colors.currentColor,
      transparent: colors.transparent,
      white: colors.white,
      black: colors.black,
      red: 'hsl(0, 100%, 74%)',
      green: 'hsl(154, 59%, 51%)',
      blue: {
        DEFAULT: 'hsl(248, 32%, 49%)',
        dark: 'hsl(249, 10%, 26%)',
        gray: 'hsl(246, 25%, 77%)',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'pattern-desktop': 'url("/images/bg-intro-desktop.png")',
        'pattern-mobile': 'url("/images/bg-intro-mobile.png")',
      },
      boxShadow: {
        under: '0 8px rgba(0, 0, 0, 0.2)',
        inset: 'inset 0 -4px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
