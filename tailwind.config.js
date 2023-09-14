/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["public/*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      'mdl':'896px',
      'xs': '415px',
      'xms': '370px',
      'xxs': '300px',
      ...defaultTheme.screens,
    },
    extend: {
      colors:{
        primary: '#041562',
        secondary:'#912024',
        color1:'#484b6a',
        color2:'#9394a5',
      },
    },
  },
  plugins: [require("daisyui")],


  daisyui: {
    themes: ['light'],
    
  },
}

