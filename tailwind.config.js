/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "sas-red": "#CC0000",
        "sas-red-dark": "#A00000",
        "sas-red-light": "#E63939",
        "sas-dark": "#1A1A1A",
        "sas-gray": "#6B7280",
        "sas-light": "#F3F4F6",
        "sas-white": "#FFFFFF",
        "sas-accent": "#CC0000",
      },
      backgroundImage: {
        "sas-gradient": "linear-gradient(135deg, #CC0000 0%, #1A1A1A 100%)",
        "sas-gradient-horizontal":
          "linear-gradient(90deg, #CC0000 0%, #1A1A1A 100%)",
        "sas-gradient-vertical":
          "linear-gradient(180deg, #CC0000 0%, #1A1A1A 100%)",
        "sas-gradient-light":
          "linear-gradient(135deg, #F3F4F6 0%, #FFFFFF 100%)",
      },
    },
  },
  plugins: [],
};