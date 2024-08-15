/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'black-1': '#FF5500',
      'gray-scale-1': '#1E1E1E',
      'gray-scale-2': '#414244',
      'gray-scale-3': '#50545E',
    },
    borderRadius: {
      DEFAULT: '14px',
    },
  },
  plugins: [],
}

