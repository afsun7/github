/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        redlight: "rgba(255,79,102,0.1)",
      },
    },
  },

  plugins: [],
};
