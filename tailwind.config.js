/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#eaf6ef',
          100: '#cde7d7',
          200: '#a7d7a7', // light accent
          300: '#7fcf8a',
          400: '#4fa96b',
          500: '#2e7d4f', // main accent
          600: '#20613b',
          700: '#184a2c', // primary forest green
          800: '#133b23',
          900: '#0d2717',
        },
      },
    },
  },
  plugins: [],
};
