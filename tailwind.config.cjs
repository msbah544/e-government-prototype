/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#17ACCB",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        dark: "#021738",
      },
      fontFamily: {
        body: ["Tilt Warp"],
      },
    },
  },
  plugins: [],
};
