/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{js,svelte}'],
  theme: {
    colors: {
      currentColor: colors.currentColor,
      transparent: colors.transparent,
      red: 'hsl(7, 99%, 70%)',
      yellow: 'hsl(51, 100%, 49%)',
      primary: {
        cyan: 'hsl(167, 40%, 24%)',
        blue: 'hsl(198, 62%, 26%)',
        'moderate-cyan': 'hsl(168, 34%, 41%)',
      },
      blue: {
        DEFAULT: 'hsl(212, 27%, 19%)',
        gray: 'hsl(213, 9%, 39%)',
        dark: 'hsl(232, 10%, 55%)',
        slate: 'hsl(210, 4%, 67%)',
      },
      white: 'hsl(0, 0%, 100%)',
    },
    extend: {
      fontFamily: {
        sans: ['Barlow', ...defaultTheme.fontFamily.sans],
        serif: ['Fraunces', ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        'header-mobile': 'url("images/mobile/image-header.jpg")',
        'header-desktop': 'url("images/desktop/image-header.jpg")',
      },
    },
  },
  plugins: [],
}
