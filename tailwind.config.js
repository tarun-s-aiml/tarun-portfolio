/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          800: '#1e293b',
          850: '#141d2e',
          900: '#0f172a',
          950: '#070a12',
        },
        brand: {
          cyan: '#06b6d4',
          sky: '#38bdf8',
          indigo: '#6366f1',
          violet: '#8b5cf6',
          emerald: '#10b981',
        },
        cyber: {
          dark: '#070a12',
          card: '#0f172a',
          accent: '#00f2fe',
          cyan: '#4facfe',
          emerald: '#00f5d4',
          purple: '#7928ca',
          pink: '#ff0080',
          border: 'rgba(255, 255, 255, 0.08)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(6, 182, 212, 0.4))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 30px rgba(99, 102, 241, 0.7))' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        }
      }
    },
  },
  plugins: [],
}
