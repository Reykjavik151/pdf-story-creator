import { COLORS } from './src/constants/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: COLORS,
    },
  },
  plugins: [],
};
