/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SF Pro Display"', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: {
        lg: '1.25rem',
      },
      colors: {
        darkbg: '#08080a',
      },
    },
  },
  plugins: [],
}
