/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': 'rgb(38, 57, 77) 0 20px 30px',
      },
    },
  },
  plugins: [],
}

// module.exports = {
//   theme: {
//     extend: {
//       boxShadow: {
//         'custom': 'rgb(38, 57, 77) 0 20px 30px',
//       },
//     },
//   },
//   variants: {},
//   plugins: [],
// };