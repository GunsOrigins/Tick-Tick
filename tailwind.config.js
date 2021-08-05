const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['index.html', 'css/styles.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Kanit', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
