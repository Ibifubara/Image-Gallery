/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        lightGrey : 'hsl(0, 0%, 87%)',
        imgDescColor : 'hsl(342, 77%, 35%)',
        tagBg : 'hsl(359, 100%, 78%)'
      },
      fontFamily: {
        body : ['Be Vietnam Pro', 'sans-serif']
      }     
    },
  },
  plugins: [],
}

