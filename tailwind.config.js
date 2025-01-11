/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      main: '#0A1316',
      second: '#b58753',
      third: '#0f1c1c',
      lightWhite: '#959590',
      lightBlack: '#424242',
    },
    extend: {
      fontFamily: {
        heading: "'Cormorant Garamond', serif",
        body: "'Jost', sans-serif"
      }
    },
  },
  plugins: [daisyui],
}