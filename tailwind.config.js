/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,ts,jsx,tsx}'], // Adjust paths if needed
   theme: {
      extend: {
         fontFamily: {
            helvetica: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
         },
      },
   },
   plugins: [],
};
