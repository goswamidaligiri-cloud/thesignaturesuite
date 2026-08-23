/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: { '2xl': '1400px' },
    },
    extend: {
      colors: {
        ivory: '#FAF8F5',
        stone2: '#F2EEE8',
        ink: '#171717',
        muted2: '#6B6B6B',
        champagne: '#C6A66A',
        line: '#E8E2DA',
        // shadcn tokens (kept minimal, mapped to ivory/ink)
        background: '#FAF8F5',
        foreground: '#171717',
        border: '#E8E2DA',
        input: '#E8E2DA',
        ring: '#C6A66A',
        primary: { DEFAULT: '#171717', foreground: '#FAF8F5' },
        secondary: { DEFAULT: '#F2EEE8', foreground: '#171717' },
        muted: { DEFAULT: '#F2EEE8', foreground: '#6B6B6B' },
        accent: { DEFAULT: '#C6A66A', foreground: '#171717' },
        card: { DEFAULT: '#FFFFFF', foreground: '#171717' },
        popover: { DEFAULT: '#FFFFFF', foreground: '#171717' },
        destructive: { DEFAULT: '#8B2E2E', foreground: '#FAF8F5' },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '.28em',
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1.12)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 1.1s cubic-bezier(0.22, 1, 0.36, 1) both',
        'slow-zoom': 'slow-zoom 18s ease-out infinite alternate',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
