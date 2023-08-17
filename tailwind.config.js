/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter'],
        'montserrat': ['Montserrat'],
      },
      colors: {
        'dark-vanilla': '#DCC1AB',
        'pomona-green': '#1B5B31',
        'chinese-black': '#111111',
        'isabelline': '#ECF1F5',
        'anti-flash-white': '#F5F0EC',

    },
  },
  plugins: [],
}
}
