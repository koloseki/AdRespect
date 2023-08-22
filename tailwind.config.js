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
        'facebook': '#3B5998',
        'linkedin': '#0077B5',

    },
      screens: {
        'ultra-sm': '480px',  // Twój niestandardowy breakpoint dla mniejszych ekranów

      },
  },
  plugins: [],
}
}
