/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors:{
      'baby-blue':"#d2ceff",
      'baby-pink':"#ffcece",
      'baby-green':'#daf2d6',
      'baby-orange':'#fff9de',
      'baby-brown':'#767267',
      'baby-gray':'#f9f9f9',
    },},
  },
  plugins: [],
}

