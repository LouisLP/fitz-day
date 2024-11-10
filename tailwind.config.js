/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "nautical-blue": "#1B3C59",
        "storm-gray": "#456176",
        "wave-blue": "#11B5E4",
        "lighthouse-yellow": "#FFB627",
        "ship-brown": "#843511",
      },
    },
  },
  plugins: [],
};
