/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber': {
          'dark': '#0c0c14',
          'darker': '#070709',
          'panel': '#12121a',
          'neon': '#0ff',
          'pink': '#ff2b9d',
        },
      },
      fontFamily: {
        'cyber': ['Chakra Petch', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
