module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      auto: '1 1 auto',
      1: '1 1 0%',
      inherit: 'inherit',
      2: '2 2 0%',
      none: 'none',
      initial: '0 1 auto',
      full: '0 0 100%',
      half: '0 0 50%'
    },
    extend: {}
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
  ],
}
