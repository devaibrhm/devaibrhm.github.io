/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      keyframes: {
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '15', transform: 'translateX(0)' },
        }
      },
      animation: {
        fadeInLeft: 'fadeInLeft 5.8s ease-out forwards',
      },
      colors: {
        primary: '#7e22ce',
        dark: '#020617',
        gray: '#334155'
      },
      fontFamily: {
        kaligrafi: ['"Great Vibes"', 'cursive'],
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

