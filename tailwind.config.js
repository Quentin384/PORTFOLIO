/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SF Pro Display"', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: {
        lg: '1.25rem',      // 20px
      },
      borderWidth: {
        DEFAULT: '1px',
      },
      colors: {
        darkbg: '#08080a',
      },
      keyframes: {
        blob: {
          '0%':   { transform: 'translate(0,0) scale(1)' },
          '33%':  { transform: 'translate(30px,-50px) scale(1.1)' },
          '66%':  { transform: 'translate(-20px,20px) scale(0.9)' },
          '100%': { transform: 'translate(0,0) scale(1)' },
        },
      },
      animation: {
        blob:       'blob 8s ease-in-out infinite',
        'blob-slow':'blob 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
