module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996dff',
          500: '#8257e6',
        },
      },
      fontFamily: {
        sans: ['Inter var'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
  darkMode: 'class',
}
