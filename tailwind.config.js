const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['index.html', 'css/styles.css', 'tailwind.config.js'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Kanit', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      ringColor: ['hover', 'active'],
      display: ['hover', 'active', 'dark'],
    },
  },
  plugins: [],
}
