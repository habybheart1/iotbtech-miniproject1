/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          gradient: {
            from: 'hsl(6, 100%, 80%)',
            to: 'hsl(335, 100%, 65%)'
          }
        },
        neutral: {
          'blue-200': 'hsl(243, 100%, 93%)',
          'grayish-blue': 'hsl(229, 7%, 55%)',
          'blue-850': 'hsl(228, 56%, 26%)',
          'blue-950': 'hsl(229, 57%, 11%)'
        }
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif']
      },
      fontSize: {
        'body': ['14px', '20px']
      }
    },
  },
  plugins: [],
};