/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a', // Deep Blue
          light: '#1e293b',
        },
        accent: {
          DEFAULT: '#0d9488', // Teal
          hover: '#0f766e',
        },
        secondary: {
          DEFAULT: '#f8fafc', // Neutral Grey
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
