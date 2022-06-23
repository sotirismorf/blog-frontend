const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'mono': ['Roboto\\ Mono', ...defaultTheme.fontFamily.mono],
    },
    colors: {
    'light': '#FAF3E3',
    'light-darker': '#F0E9DA',
    'orange': '#FF9F29',
    'orange-dark': '#C2791F',
    'green': '#1A4D2E',
    'black': '#000000',
    },
    extend: {},
  },
  plugins: [],
}
