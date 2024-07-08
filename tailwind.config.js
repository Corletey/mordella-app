/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBrown: '#F6B40C',
        darkBrown: '#6D4C41'
      }
    },
  },
  plugins: [],
}

