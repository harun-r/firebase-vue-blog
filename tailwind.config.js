/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto Mono', 'monospace'],
    },
    extend:{
      colors: {
        'black': '#2f2f2f',
        'blue': '#1fb6ff',
        'pink': '#ff49db',
        'gray': '#aac8e4',
        'green': '#42b883'
      },
      fontSize: {
        base: '.9rem',
      },
    }
  },
  plugins: [],
}

