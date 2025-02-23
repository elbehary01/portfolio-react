/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      animation: {
        blink: 'background-blink 2s infinite',
      },
      keyframes: {
        'background-blink': {
          '0%, 100%': { backgroundColor: '#3B82F6' },
          '50%': { backgroundColor: '#60A5FA' },
        },
      },
    },
  },
  plugins: [],
};
