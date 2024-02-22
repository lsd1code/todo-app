/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bright-blue': 'hsl(220, 98%, 61%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
        'very-light-grayish-blue': 'hsl(236, 33%, 92%)',
        'light-grayish-blue': 'hsl(233, 11%, 84%)',
        'dark-grayish-blue': 'hsl(236, 9%, 61%)',
        'very-dark-grayish-blue': 'hsl(235, 19%, 35%)',
        'very-dark-blue': 'hsl(235, 21%, 11%)',
        'very-dark-saturated-blue': 'hsl(235, 24%, 19%)',
        'light-grayish-blue-darkmode': 'hsl(234, 39%, 85%)',
        'light-grayish-blue-darkmode-hover': 'hsl(236, 33%, 92%)',
        'dark-grayish-blue-darkmode': 'hsl(234, 11%, 52%)',
        'very-dark-grayish-blue-darkmode': 'hsl(233, 14%, 35%)',
        'very-dark-grayish-blue-darkmode-': 'hsl(237, 14%, 26%)',
        'gradient-left': 'hsl(192, 100%, 67%)',
        'gradient-right': 'hsl(280, 87%, 65%)',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}