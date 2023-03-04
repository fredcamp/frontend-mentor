/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./index.html', './src/**/*.{svelte,ts}'],
  theme: {
    colors: {
      currentColor: colors.currentColor,
      transparent: colors.transparent,
      white: 'hsl(0, 0%, 98%)',
      gray: 'hsl(0, 0%, 41%)',
      black: 'hsl(0, 0%, 8%)',
      slate: '#ADADAD',
    },
    extend: {
      fontFamily: {
        sans: ['Epilogue', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        custom: `0 0 10px rgba(0,0,0,0.5)`,
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.rotate-x-180': {
          transform: 'rotateX(180deg)',
        },
      })
    }),
  ],
}
