/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,ts}",
    "./src/**/*/.{html,ts}",
    "./src/app/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        principal: ["'Inter'", 'sans-serif'],
      }
    },
  },
  plugins: [],
}

