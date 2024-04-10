/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['Lato', 'sans-serif'],
      },

      colors: {
        'theme-purple': {
          light: '#c4b5fd',
          DEFAULT: '#bebee7',
          dark: '#9d9dda',
        },

        'theme-brown': {
          light: '#d9ced0',
          DEFAULT: '#c6babc',
          dark: '#b6a6a8'
        },

        'theme-green': {
          light:'#648c82',
          DEFAULT: '#557a70',
          dark:'#496a62'
        }
      
      },
    },
  },
  plugins: [],
}

