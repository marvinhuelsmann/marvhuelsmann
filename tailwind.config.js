module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DM Sans'],
        'display': ['DM Sans'],
        'body': ['"DM Sans"']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
