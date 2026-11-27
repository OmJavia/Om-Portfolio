// @type {import('tailwindcss').Config}
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-open-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-open-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['var(--font-open-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-open-sans)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.35rem, 4.6vw, 3.75rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(1.875rem, 3vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h1': ['clamp(1.625rem, 2.4vw, 2.125rem)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'h2': ['1.375rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3': ['1.125rem', { lineHeight: '1.35', letterSpacing: '-0.005em' }],
        'body-lg': ['1.0625rem', { lineHeight: '1.65' }],
        'eyebrow': ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.1em' }],
        'meta': ['0.8125rem', { lineHeight: '1.4' }],
      },
      colors: {
        canvas: '#FAF9F6',
        surface: '#FFFFFF',
        subtle: '#F2F1EC',
        ink: '#141615',
        muted: '#5C6360',
        line: '#E4E4DF',
        night: '#141615',
        accent: {
          DEFAULT: '#1F5E4B',
          hover: '#174839',
          soft: '#EAF2EE',
        },
      },
    },
  },
  plugins: [],
};
