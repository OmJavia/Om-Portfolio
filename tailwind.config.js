// @type {import('tailwindcss').Config}
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: ['burtons', 'sans-serif'],
        sans: ['"Outfit"', '"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'Courier New', 'monospace'],
      },
      colors: {
        stone: {
          50: '#fdfcfb',
          100: '#f5f4f2',
          200: '#e7e5e0',
          300: '#d5d2cb',
          800: '#1f1e1c',
          900: '#121211',
          950: '#0a0a0a',
        },
        accent: {
          orange: '#ff6b00',
          amber: '#cc5400',
        }
      }
    },
  },
  plugins: [],
}

