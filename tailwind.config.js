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
      // Ajout pour effet glow
      dropShadow: {
        neon: '0 0 8px rgba(56,189,248,0.8)',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'glow-pulse': 'glow 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
