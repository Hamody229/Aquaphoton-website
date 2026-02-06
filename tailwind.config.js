/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        century: [
          '"Century Gothic"',
          "CenturyGothic",
          "AppleGothic",
          "sans-serif",
        ],
      },
      colors: {
        ocean: {
          900: "#000814",
          800: "#001d3d",
          700: "#003566",
          400: "#0077b6",
        },
      },
    },
  },
  plugins: [],
};
