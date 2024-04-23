/** @type {import('tailwindcss').Config} */

const theme = require('./src/configs/theme.ts')

module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: { extend: { ...theme } },
  plugins: [],
}
