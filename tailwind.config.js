// @type {import('tailwindcss').Config}
module.exports = {
  darkMode: 'class',
  content: [
<<<<<<< HEAD
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
=======
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
>>>>>>> b33423f (Updated Theme of the website)
  ],
  theme: {
    extend: {
      fontFamily: {
<<<<<<< HEAD
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
=======
        burtons: ['burtons', 'sans-serif'],
        // Headings: Plus Jakarta Sans (premium, modern)
        sans: ['"Plus Jakarta Sans"', '"Outfit"', '"Inter"', 'sans-serif'],
        // Technical tags, metrics, code: JetBrains Mono
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'Courier New', 'monospace'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        // Obsidian Neural Design Tokens
        obsidian: {
          bg: '#09090b',       // Deep Obsidian background
          card: '#18181b',     // Zinc-900 card surface
          border: '#27272a',   // Zinc-800 border
          hover: '#3f3f46',    // Zinc-700 hover border
        },
        neural: {
          amber: '#f97316',    // Primary Accent — Neural Amber
          'amber-dark': '#ea6c0a',
          'amber-light': '#fb923c',
          sky: '#38bdf8',      // Secondary Accent — Electric Sky Blue
          'sky-dark': '#0ea5e9',
          'sky-light': '#7dd3fc',
        },
        // Legacy colors (kept for existing components)
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
          orange: '#f97316',
          amber: '#ea6c0a',
        }
      },
      backgroundImage: {
        // Subtle noise texture via SVG data URI
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
        // Radial amber glow for hero
        'amber-glow': 'radial-gradient(ellipse 80% 60% at 50% 120%, rgba(249, 115, 22, 0.15) 0%, transparent 70%)',
        // Neural gradient for accents
        'neural-gradient': 'linear-gradient(135deg, #f97316 0%, #38bdf8 100%)',
      },
      keyframes: {
        // Pulse ring for metric counters and AI widget FAB
        'ping-ring': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '75%, 100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        // Shimmer for spotlight cards
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        // Blinking cursor for terminal/AI widget
        'terminal-blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        // Float animation for hero illustration
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        // Gradient rotation for ambient glows
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        // Chroma shine (existing, kept)
        shine: {
          to: { backgroundPosition: '-200% center' },
        },
      },
      animation: {
        'ping-ring': 'ping-ring 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'terminal-blink': 'terminal-blink 1s step-end infinite',
        'float': 'float 4s ease-in-out infinite',
        'gradient-x': 'gradient-x 4s ease infinite',
        'shine': 'shine 1.5s linear infinite',
      },
      boxShadow: {
        // Amber glow shadows
        'amber-sm': '0 0 12px rgba(249, 115, 22, 0.25)',
        'amber-md': '0 0 24px rgba(249, 115, 22, 0.35)',
        'amber-lg': '0 0 48px rgba(249, 115, 22, 0.4)',
        // Sky glow shadows
        'sky-sm': '0 0 12px rgba(56, 189, 248, 0.2)',
        'sky-md': '0 0 24px rgba(56, 189, 248, 0.3)',
        // Card shadow (obsidian)
        'card': '0 1px 3px rgba(0,0,0,0.5), 0 4px 12px rgba(0,0,0,0.4)',
        'card-hover': '0 4px 24px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.5)',
      },
      borderRadius: {
        '4xl': '2rem',
>>>>>>> b33423f (Updated Theme of the website)
      },
    },
  },
  plugins: [],
<<<<<<< HEAD
};
=======
}
>>>>>>> b33423f (Updated Theme of the website)
