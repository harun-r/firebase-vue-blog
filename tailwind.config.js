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
        'blue': '#1fb6ff',
        'pink': '#ff49db',
        'gray': '#8492a6',
        'green': '#42b883'
      },
      fontSize: {
        base: '.9rem',
      },
    }
  },
  plugins: [],
}

