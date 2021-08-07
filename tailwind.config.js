const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./public/**/*.html', 'css/styles.css', 'tailwind.config.js'],
  darkMode: 'media',
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
