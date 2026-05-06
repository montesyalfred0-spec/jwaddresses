/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jw: {
          50: '#f0f4f9',
          100: '#d9e3f1',
          200: '#b3c7e3',
          300: '#8daad5',
          400: '#678dc7',
          500: '#4A6DA7',
          600: '#3d5b8d',
          700: '#304973',
          800: '#243759',
          900: '#18253f',
          950: '#0c1325',
        },
        jwbg: '#F7F5F2',
        jwcard: '#FFFFFF',
        jwtext: '#1A1A1A',
        jwtextm: '#555555',
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 1s linear infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
