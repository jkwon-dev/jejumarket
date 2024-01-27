/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#ff7b00'
      },
      backgroundImage: {
        banner: `url('../public/images/banner.jpg')`
      }
    },
  },
  plugins: [],
}

