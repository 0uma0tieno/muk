
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./contexts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        'mukesa-blue': '#0033A0', 
        'mukesa-red': '#DA291C',   
        'mukesa-black': '#121212',
        'mukesa-gray': {
          DEFAULT: '#F3F4F6', 
          dark: '#1F2937',  
          text: '#D1D5DB'   
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      },
      animation: {
        'modal-pop-in': 'modal-pop-in 0.3s ease-out forwards',
      },
      keyframes: {
        'modal-pop-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
