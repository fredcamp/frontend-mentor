/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,svelte}'],
  theme: {
    colors: {
      'dark-blue': {
        intro: 'hsl(217, 28%, 15%)',
        DEFAULT: 'hsl(218, 28%, 13%)',
        footer: 'hsl(216, 53%, 9%)',
        testimonials: 'hsl(219, 30%, 18%)',
      },
      white: 'hsl(0, 0%, 100%)',
      cyan: 'hsl(176, 68%, 64%)',
      blue: 'hsl(198, 60%, 50%)',
      red: 'hsl(0, 100%, 63%)',
      black: colors.black,
      currentColor: colors.currentColor,
      transparent: colors.transparent,
      light: '#F8F8FE',
      'light-bright-blue': 'hsl(224, 93%, 58%)',
      'light-moderate-cyan': 'hsl(170, 45%, 43%)',
      'light-gray-blue': 'hsl(240, 75%, 98%)',
      'light-gray': 'hsl(0, 0%, 75%)',
      'light-desaturated-blue': 'hsl(238, 22%, 44%)',
      'light-very-dark-blue': 'hsl(243, 87%, 12%)',
    },
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Raleway', ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        'curvy-pattern-lg': 'url("/images/bg-curvy-desktop.svg")',
        'curvy-pattern-lg-light': 'url("/images/bg-curve-desktop-light.svg")',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.bg-header': {
          'background-image':
            'url("/images/bg-curvy-mobile.svg"), url("/images/bg-rect.svg")',
          'background-position': 'center, bottom',
          'background-repeat': 'no-repeat, repeat no-repeat',
          'background-size': '100% 30%, 100% 38%',
        },
        '.bg-header-light': {
          'background-image':
            'url("/images/bg-curve-mobile-light.svg"), url("/images/bg-rect-light.svg")',
          'background-position': 'center, bottom',
          'background-repeat': 'no-repeat, repeat no-repeat',
          'background-size': '100% 30%, 100% 38%',
        },
      })
    }),
  ],
}
