/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "sm-custom": "650px",
      },
      colors: {
        LinkdenColor: "#0092de",
        FacebookColor: "#1877F2",
        TwiterColor: "#374654",
        InstaColor: "#F58529",
        GitHubColor: "#323131",
      },
    },
  },
  plugins: [],
};
