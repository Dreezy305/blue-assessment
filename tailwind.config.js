/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        purple: "#dedede",
        dark: "#fafafc",
        deepPurple: "#3c339c",
        green: "#36cc61",
      },
    },
  },
  plugins: [],
};
