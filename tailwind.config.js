/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: {
          50: '#fcf5f3',
          100: '#f8e8e3',
          200: '#f3d3c8',
          300: '#e8b2a0',
          400: '#db876f',
          500: '#c86d51', // primary terracotta
          600: '#b4553a',
          700: '#96432d',
          800: '#7c3a29',
          900: '#673426',
        },
        cream: {
          50: '#ffffff',
          100: '#fdfbf7', // primary cream
          200: '#f8f2e7',
          300: '#f0e5d1',
          400: '#e5d3b3',
          500: '#d7be94',
          800: '#3d3429',
          900: '#1f1917', // dark warm room background
        },
        sage: {
          50: '#f5f7f4',
          100: '#e6ebe4',
          200: '#ced9cb',
          300: '#abbfa7',
          400: '#8a9a86', // primary sage
          500: '#6f816b',
          600: '#576753',
          700: '#465243',
          800: '#3a4338',
        },
        amberGold: {
          100: '#fdf8e6',
          300: '#f7e29b',
          500: '#d4af37', // primary warm gold
          600: '#b89228',
          700: '#94721c',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'Cambria', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        handwriting: ['Dancing Script', 'Caveat', 'cursive'],
      },
      animation: {
        'soft-glow': 'softGlow 3s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 2.5s ease-in-out infinite alternate',
      },
      keyframes: {
        softGlow: {
          '0%': { boxShadow: '0 0 15px rgba(212, 175, 55, 0.3), 0 0 30px rgba(200, 109, 81, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.7), 0 0 50px rgba(200, 109, 81, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        twinkle: {
          '0%': { opacity: '0.3', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
