/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "360px",
      sm: "520px",
      md: "760px",
      lg: "980px",
      xl:"1220px"
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        100:"25rem",
        120:"28rem",
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
};

