// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       screens: {
//         "sm-custom": "650px",
//       },
//       colors: {
//         LinkdenColor: "#0092de",
//         FacebookColor: "#1877F2",
//         TwiterColor: "#374654",
//         InstaColor: "#F58529",
//         GitHubColor: "#323131",
//       },
//     },
//   },
//   plugins: [],
// };

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // darkMode: "class",
  theme: {
    extend: {
      screens: {
        "sm-custom": "650px",
        "ssiz-450": { max: "450px" },
        "ssiz-650": { max: "650px" },
        "ssiz-800": { max: "800px" },
        "ssiz-900": { max: "900px" },
        "ssiz-1000": { max: "1000px" },
        "ssiz-1100": { max: "1100px" },
        "ssiz-1200": { max: "1200px" },
        "ssiz-1300": { max: "1300px" },
        "ssiz-1400": { max: "1400px" },
      },
      colors: {
        LinkdenColor: "#0092de",
        FacebookColor: "#1877F2",
        TwiterColor: "#374654",
        InstaColor: "#F58529",
        GitHubColor: "#323131",
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
