/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./insetex.html'],
  theme: {
    extend: {
      colors:{
        'primary':'#3238f2'

      },
      fontFamily:{
        'raza-font':['Poppins','sans-serif'],
        'md-font':['Pacifico','serif'],
        'display':['Poppins','sans-serif'],
        'body':['Inter','sans-serif']
      }
    },
  },
  plugins: [],
}

