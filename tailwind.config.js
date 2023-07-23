/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#F8F8F8',
      'light-blue': '#45DDFB',
      black: '#0D0D0D',
      'light-black': '#151517',
      'light-grey': '#E3E3E3',
      'dark-grey': '#C4C4C4',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        oswald: ['var(--font-oswald)'],
        code: ['var(--font-code)'],
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
};
