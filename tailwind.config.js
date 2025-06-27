// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#d6b4f0', // light purple
//       },
//     },
//   },
//   plugins: [],
// }

// tailwind.config.cjs
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a855f7", // light purple
        secondary: "#9333ea", // deeper purple
      },
    },
  },
  plugins: [],
};

