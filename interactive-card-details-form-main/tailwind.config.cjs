/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./index.html', './src/**/*.{svelte,ts,js}'],
  theme: {
    colors: {
      gradient: {
        primary: 'hsl(249, 99%, 64%)',
        secondary: 'hsl(278, 94%, 30%)',
      },
      red: 'hsl(0, 100%, 66%)',
      white: 'hsl(0, 0%, 100%)',
      gray: {
        DEFAULT: 'hsl(270, 3%, 87%)',
        dark: 'hsl(279, 6%, 55%)',
      },
      violet: 'hsl(278, 68%, 11%)',
      black: colors.black,
      transparent: 'transparent',
      currentColor: 'currentColor',
    },
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'desktop-bg': 'url("/images/bg-main-desktop.png")',
        'mobile-bg': 'url("/images/bg-main-mobile.png")',
        'custom-gradient':
          'linear-gradient(white, white), linear-gradient(to right, hsl(249, 99%, 64%), hsl(278, 94%, 30%))',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.bg-clip-paddbox': {
          'background-clip': 'padding-box, border-box',
        },
      })
    }),
  ],
}
