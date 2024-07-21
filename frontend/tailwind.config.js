 /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm-custom': '650px',
      },
      colors: {
        customColor: '#0B020E',
      },
    },
  },
  plugins: [],
};
