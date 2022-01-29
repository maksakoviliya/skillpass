module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        11.5: "2.875rem",
        13: "3.25rem",
        15: "3.75rem",
        17.5: "3.375rem",
        25: "6.25rem",
        38: "9.5rem",
        57.5: "14.375rem",
      },
      fontFamily: {
        sans: "Nunito, Arial, sans-serif",
      },
      fontSize: {
        15: "15px",
      },
      colors: {
        gray: {
          500: "#656565",
          700: "#383549",
        },
        indigo: {
          200: "#C4D3F9",
          300: "#DCE2F1",
        },
        violet: {
          800: "#51459D",
        },
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
