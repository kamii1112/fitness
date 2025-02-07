/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        TK: {
          background: '#131921',
          default: '#131921',
        },
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%)',
      },
    },
  },
  plugins: [],
};
