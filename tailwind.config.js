/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
  plugins: [],
};
