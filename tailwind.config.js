module.exports = {
  mode: 'jit',
  content: ['./pages/*.{js,ts,jsx,tsx}', './components/*.{js,ts,jsx,tsx}'],
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
    require('@tailwindcss/forms'),
  ],
}
