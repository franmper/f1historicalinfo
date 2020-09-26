module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
        'f1-black': '#1f1f27',
        'f1-white': '#ffffff',
        'f1-red': '#e10600',
        'f1-gray': '#38383f'
      },
      boxShadow: {
        md: '0 4px 6px -1px rgba(225, 6, 0, 0.15), 0 2px 4px -1px rgba(225, 6, 0, 0.09)',
        lg: '0 5px 15px 1px rgba(225, 6, 0, 0.6), 0 4px 6px -2px rgba(225, 6, 0, 0.2)',
      }
    },
  },
  variants: {},
  plugins: [],
}
