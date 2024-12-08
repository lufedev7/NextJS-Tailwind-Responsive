/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'bgImg': "url('/imgLateral.png')",
      },
      screens: {
        mobileg: '450px',
        mdmobile: '818px',
        bm: '599px'
        // => @media (min-width: 450px) { ... }
      },
    },
  },
  plugins: [],
};
