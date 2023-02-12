/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-2xl": { max: "1535px" },
        "max-xl": { max: "1279px" },
        "max-lg": { max: "1023px" },
        "max-md": { max: "767px" },
        "max-sm": { max: "639px" },
      },
      colors: {
        primary: {
          50: "#5C8074",
          100: "#537469",
          200: "#425C54",
          300: "#31453E",
          400: "#202D29",
          500: "#0F1513",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7c81d3",
          secondary: "#eeffad",
          accent: "#a16ae8",
          neutral: "#272B30",
          "base-100": "#ECE9F1",
          info: "#65BADC",
          success: "#5DDAC5",
          warning: "#FCC85A",
          error: "#F7836E",
        },
      },
    ],
  },
};
