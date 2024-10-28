/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#C92071',
      'secundary': '#B5B6F2',
      'tertiary': '#991956',
      'error': '#EE4266',
      'success': '#52CA76',
      'warning': '#F6AA1C',
      'promo': '#E7FF86',
      'colecao': '#D8E3F2',
      'dark-gray': '#1F1F1F',
      'dark-gray-2':'#474747',
      'dark-gray-3': '#666666',
      'light-gray': '#8F8F8F',
      'light-gray-2': '#CCCCCC',
      'light-gray-3': '#F5F5F5',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      screens: {
        'ssm': '320px',
        'sm' : '420px',
      }
    },
  },
  plugins: [],
}