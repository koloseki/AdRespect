/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-vanilla': '#DCC1AB',
        'pomona-green ': '#1E3D2F',
        'chinese-black': '#111111',
        'isabelline': '#ECF1F5',
        'anti-flash-white': '#F5F0EC',

    },
  },
  plugins: [],
}
}
