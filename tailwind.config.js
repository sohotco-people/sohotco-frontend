/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,tx,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary1: '#4A7AAA',
        primary2: '#82A6CA',
        gray1: '#A0A0A0',
        gray2: '#D9D9D9',
        gray3: '#EBEBEB',
        gray4: '#F5F5F5',
        black: '#1F1C1C',
      },
      height: {
        13: '3.188rem',
      },
      padding: {
        4.5: '1.156rem',
      },
    },
  },
  plugins: [],
}
