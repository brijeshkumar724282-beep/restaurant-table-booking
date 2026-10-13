/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        coal: '#14100c',
        bark: '#1e1712',
        card: '#251c15',
        cream: '#f5ead9',
        sand: '#c9b294',
        ember: '#e0782f',
        emberdark: '#b85a1c',
      },
      fontFamily: {
        display: ['Georgia', "'Times New Roman'", 'serif'],
        body: ['"Avenir Next"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
