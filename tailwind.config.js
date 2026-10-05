/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0F7FF',
          100: '#E0EFFF',
          200: '#BAE0FF',
          500: '#0B63E5',
          600: '#0954C4',
          700: '#07429D',
          glow: 'rgba(11, 99, 229, 0.15)',
        },
        slate: {
          heading: '#101828',
          body: '#475467',
          muted: '#667085',
          border: '#E4E7EC',
          surface: '#F8FAFC',
          cardDark: '#161C24',
          cardDarkBorder: '#28323F'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft-card': '0 10px 30px -5px rgba(0, 0, 0, 0.04), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'float-pill': '0 20px 40px -10px rgba(11, 99, 229, 0.08), 0 1px 3px rgba(0,0,0,0.05)',
        'blue-glow': '0 10px 25px -3px rgba(11, 99, 229, 0.35)',
        'dark-glow': '0 20px 40px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.06)'
      }
    },
  },
  plugins: [],
}
