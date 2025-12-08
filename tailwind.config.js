/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "nordic-blue": "#4A90A4",
        "nordic-dark": "#2C3E50",
        "nordic-light": "#ECF0F1",
        "nordic-gray": "#95A5A6",
        "nordic-white": "#F8F9FA",
        "nordic-accent": "#3498DB",
        "nordic-warm": "#E8DCC4",
      },
      backgroundImage: {
        "nordic-gradient": "linear-gradient(135deg, #4A90A4 0%, #2C3E50 100%)",
        "nordic-gradient-horizontal":
          "linear-gradient(90deg, #4A90A4 0%, #2C3E50 100%)",
        "nordic-gradient-vertical":
          "linear-gradient(180deg, #4A90A4 0%, #2C3E50 100%)",
        "nordic-gradient-light":
          "linear-gradient(135deg, #ECF0F1 0%, #F8F9FA 100%)",
      },
    },
  },
  plugins: [],
};