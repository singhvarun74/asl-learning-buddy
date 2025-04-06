/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-glow': '#4F46E5',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px #4F46E5' },
          '100%': { boxShadow: '0 0 30px #4F46E5, 0 0 50px #4F46E5' },
        },
      },
    },
  },
  plugins: [],
};