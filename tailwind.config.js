/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '../src/pages/*.{html, tsx}',
    '../src/components/*.{html, tsx}',
  ],
  theme: {
    colors: {
      'platinum': '#E0E1DD',
      'light-gray': '#778da9',
      'dark-gray': '#415A77',
      'oxford-blue': '#1B263B',
      'rich-black': '#0D1B2A',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {

    },
  },
  plugins: [],
}


// you can access the color palette here: https://coolors.co/palette/0d1b2a-1b263b-415a77-778da9-e0e1dd
