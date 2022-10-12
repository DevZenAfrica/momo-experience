/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontSize: {
      xs: '9.5px',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      colors: {
        'blue': {
          50: '#e0f3f6',
          100: '#b2e1e9',
          200: '#83cddc',
          300: '#59b9cf',
          400: '#3dabc9',
          500: '#239ec3',
          600: '#1990b6',
          700: '#0a7fa4',
          800: '#0a6e91',
          900: '#004F71',
        },
        'yellow': {
          50:  '#fff9e0',
          100: '#ffedb0',
          200: '#ffe27d',
          300: '#ffd844',
          400: '#ffcd05',
          500: '#ffc400',
          600: '#ffb600',
          700: '#ffa200',
          800: '#ff9000',
          900: '#ff6f00',
        },
      },
    },
  },
  plugins: [],
}
