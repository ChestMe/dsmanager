/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Unbounded', 'Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          950: '#05060c',
          900: '#07080f',
          850: '#0b0d16',
          800: '#10121c',
          700: '#161825',
          600: '#1c1f30',
          500: '#262a40',
        },
        mist: {
          50: '#f4f5fb',
          100: '#e6e8f4',
          200: '#c5c9de',
          300: '#9aa0bd',
          400: '#71789a',
          500: '#575d7a',
        },
        neon: {
          violet: '#7c6cff',
          cyan: '#2ee6ff',
          pink: '#ff5ec8',
          lime: '#b8ff4a',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(124, 108, 255, 0.25)',
        'glow-cyan': '0 0 40px rgba(46, 230, 255, 0.18)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
