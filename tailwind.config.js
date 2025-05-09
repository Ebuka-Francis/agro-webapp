// /** @type {import('tailwindcss').Config} */
// export const content = ['./src/**/*.{js,ts,jsx,tsx}'];
// export const theme = {
//    extend: {
//       fontFamily: {
//          helvetica: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
//       },
//    },
// };
// export const plugins = [];

// export const content = [
//    './pages/**/*.{js,ts,jsx,tsx}',
//    './components/**/*.{js,ts,jsx,tsx}',
// ];
// export const theme = {
//    extend: {
//       keyframes: {
//          scroll: {
//             '0%': { transform: 'translateX(0)' },
//             '100%': { transform: 'translateX(-50%)' }, // assuming duplicated images
//          },
//       },
//       animation: {
//          scroll: 'scroll 20s linear infinite',
//       },
//    },
// };
// export const plugins = [];
// tailwind.config.js
module.exports = {
   darkMode: 'class', // or 'media' if you prefer automatic detection
   content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      extend: {
         // your custom stuff
      },
   },
   plugins: [],
};
