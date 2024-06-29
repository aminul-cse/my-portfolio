/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      "TimesNewRoman": ["TimesNewRoman", "Times New Roman", "Times", "Baskerville", "Georgia", "serif"],
      "clicker": ["Clicker Script", "cursive"]
    },
    extend: {
      colors: {
        green: "#37b182",
      },
    },
  },
  plugins: [],
};