/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        gotham : ['customfont' , 'gotham-fonts']
      }
    },
  },
  plugins: [],
};

