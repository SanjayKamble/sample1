/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#f8f7ff",
          100: "#f6f5ff",
          200: "#eff0fe",
          300: "#e0e0fc",
          400: "#98A5C0",
          500: "#84848f",
          600: "#595983",
          700: "#1e1f48",
          800: "#141430",
          900: "#0a0a18",
        },
        primary: {
          DEFAULT: "#DD469D",
          100: "#F4F2FA",
          200: "#F8F7FB",
          300: "#9E90C2",
          // '400': '#130144',
          400: "#0d1f67",
          500: "#DD469D",
          600: "#0d1f67",
          // '600': '#492E90',
          700: "#0d1f67",
          // '700': '#482E8F',
          800: "#DBD5E9",
        },
        secondary: {
          DEFAULT: "#C5C5C5",
          100: "#DADADA",
          150: "#747474",
          200: "#FFFFFF",
          300: "#F6F6F6",
          400: "#E4E4E4",
          500: "#C5C5C5",
          600: "#949494",
          700: "#000000",
          800: "#F1F1F1",
          900: "#F9F9F9",
        },
        graph: {
          DEFAULT: "#A1C9FF",
          200: "#FF99B8",
          300: "#ABDFA2",
          400: "#FEC195",
          500: "#A1C9FF",
          600: "#D2C8F0",
        },
        error: {
          DEFAULT: "#EF1E21",
          300: "#DE448E",
          500: "#EF1E21",
        },
        success: {
          DEFAULT: "#37AC2C",
          100: "#C3E6C0",
          500: "#37AC2C",
        },
        "pink-grad": {
          DEFAULT: "#DB4297",
          500: "#DB4297",
          600: "#DC3844",
        },
        "orange-light": {
          100: "#FFF5D3",
          200: "#EFBD3B",
          500: "#FFEDBE",
          600: "#D7A012",
          800: "#F29641",
        },
        unic: {
          100: "#F9F9F9",
          200: "#F5F5F5",
          300: "#949494",
          400: "#E8E3F8",
          500: "#D2C8F0",
          600: "#DDDDDD",
          700: "#C4C4C4",
          800: "#E5E5E5",
        },
        support: {
          100: "#C5C5C5",
          200: "#009743",
          300: "#FBC52B",
          400: "#DE122D",
          500: "#0BF40B",
          600: "#009000",
          700: "#F19C00",
          800: "#D93192",
          900: "#13E3FF",
        },
      },
      boxShadow: {
        cu: "0px 6px 24px rgba(0,0,0,0.09)",
        new: "0px 2px 24px rgba(0,0,0,0.10)",
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        none: "none",
        new: "0px 0px 34px 0px rgba(0,0,0,0.09)",
        coupon: "0px 6px 20px 0px rgba(0,0,0,0.12)",
        drop: "0px 1px 14px 0px rgba(0,0,0,0.10)",
        support: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        custome: "0 6px 24px 0 rgba(0, 0, 0, 0.09)",
      },
      width: {
        "6/9": "78.35%",
        "3/9": "26.65%",
        "4/9": "45%",
        "2/9": "23%",
        "5/9": "48%",
        "1/9": "30%",
        "7/9": "32%",
        "8/9": "31%",
        "9/9": "38%",
        45: "44%",
        35: "35%",
        97: "97%",
        88: "88%",
        9: "9%",
      },
      fontSize: {
        xxs: ".65rem",
      },
      height: {
        8.1: "2.15rem",
      },
      rotate: {
        225: "225deg",
      },
      minHeight: {
        screen: "calc(100vh - 69px )",
        "cu-screen": "calc(100vh)",
        "min-screen": "calc(100vh - 89px - 50px)",
        "admin-screen": "calc(100vh - 66px)",
        "no-list": "calc(100vh - 81px - 50px - 165px)",
      },
      maxHeight: {
        "cu-screen": "calc(100vh - 87px )",
      },
      minWidth: {
        custome: "11rem",
      },

      transformOrigin: {
        0: "0%",
      },
      zIndex: {
        "-1": "-1",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Nunito", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ["dark"],
    },
  },
  plugins: [],
};
