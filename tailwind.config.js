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
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
        serif: ['var(--font-display)', 'Georgia', 'serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      // Tactile Intelligence tokens (Warm Gallery Light)
      fontSize: {
        'display-xl': ['clamp(2.75rem, 6.4vw, 5.75rem)', { lineHeight: '0.98', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 4.6vw, 4rem)', { lineHeight: '1.02', letterSpacing: '-0.015em' }],
        'h1': ['clamp(2rem, 3.4vw, 3rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'h2': ['clamp(1.5rem, 2.4vw, 2rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'h3': ['1.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.65' }],
        'eyebrow': ['0.75rem', { lineHeight: '1', letterSpacing: '0.14em' }],
        'meta': ['0.75rem', { lineHeight: '1.4' }],
      },
      colors: {
        canvas: '#F5F5F0',
        surface: '#FFFFFF',
        ink: '#15171C',
        muted: '#626B78',
        cobalt: '#4F5EEB',
        signal: { teal: '#22B8A8', coral: '#FF826E', lime: '#C8E879' },
        line: '#E3E5E8',
        night: '#111827',
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
      },
    },
  },
  plugins: [],
}
