module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      'bubble-gum': '#ff77e9',
      bermuda: '#78dcca',
    },
    extend: {},
  },
  plugins: [require('postcss-import'), require('tailwindcss')],
}
