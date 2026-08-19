// @type {import('tailwindcss').Config}
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        obsidian: '#09090b',
        surface: '#18181b',
        border: '#27272a',
        neural: '#f97316',
        electric: '#38bdf8',
      },
      boxShadow: {
        neural: '0 0 40px rgba(249,115,22,.12)',
        electric: '0 0 40px rgba(56,189,248,.10)',
      },
    },
  },
  plugins: [],
};
