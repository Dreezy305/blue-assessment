/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "700px",
      md: "1120px",
      lg: "1200px",
      xl: "1400px",
    },
    fontFamily: {
      poppins: "Poppins",
      roboto: ["Roboto"],
    },
    extend: {
      colors: {
        purple: "#dedede",
        dark: "#fafafc",
        deepPurple: "#3c339c",
        green: "#36cc61",
        darkText: "#d4d4d4",
        light: "#f5f5f5",
        purpleText: "#4841a0",
      },
    },
  },
  plugins: [],
};
