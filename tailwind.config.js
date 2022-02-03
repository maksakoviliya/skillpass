module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        1.5: "0.375rem",
        3.5: "0.875rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        11.5: "2.875rem",
        12.5: "3.125rem",
        13: "3.25rem",
        15: "3.75rem",
        17.5: "3.375rem",
        19: "4.75rem",
        22.5: "5.625rem",
        23.5: "5.875rem",
        25: "6.25rem",
        29: "7.375rem",
        38: "9.5rem",
        50: "12.5rem",
        57.5: "14.375rem",
        90: "22.5rem",
        158: "158px",
        170: "170px",
        235: "235px",
      },
      minHeight: {
        9: "2.25rem",
        11.5: "2.875rem",
        90: "22.5rem",
        360: "360px",
      },
      minWidth: {
        13.5: "3.375rem",
        130: "130px",
        140: "140px",
        150: "150px",
        583: "583px",
      },
      maxWidth: {
        16: "4rem",
        18: "4.5rem",
        58: "14.625rem",
        90: "90px",
        182: "182px",
        486: "486px",
        500: "500px",
        583: "583px",
      },
      maxHeight: {
        "100vh": "100vh",
      },
      borderRadius: {
        xl: "10px",
      },
      fontFamily: {
        sans: "Nunito, Arial, sans-serif",
      },
      lineHeight: {
        19: "19px",
        22: "22px",
      },
      boxShadow: {
        sm: "1px 1px 50px #F3F3F3",
        md: "box-shadow: 1px 1px 30px rgba(89, 80, 148, 0.1);",
      },
      fontSize: {
        15: "15px",
      },
      colors: {
        sky: {
          200: "#F2F7FE",
          300: "#F7F9FC",
          250: "#F2F8FF",
        },
        gray: {
          300: "#AEB7CE",
          400: "#C3C7D1",
          500: "#656565",
          700: "#383549",
        },
        indigo: {
          200: "#C4D3F9",
          300: "#DCE2F1",
        },
        violet: {
          400: "#C9C4EC",
          500: "#665BA9",
          800: "#51459D",
        },
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ["first", "last"],
      borderWidth: ["first", "last"],
      padding: ["first", "last"],
    },
    scrollbar: ["rounded"],
  },
  plugins: [require("tailwind-scrollbar")],
};
