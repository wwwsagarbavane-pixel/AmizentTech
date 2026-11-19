/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amizent: {
          bg: '#EAF1F8',
          bgSecondary: '#DCE7F2',
          card: '#F8FBFF',
          heading: '#12457F',
          body: '#14181F',
          secondaryText: '#4A607A',
          accent: '#1B58A6',
          accentHover: '#154583',
          border: '#C8D7E8',
          mutedBlue: '#8FAAC8',
          subtle: '#F0F5FA',
          navyDark: '#0B2B50',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(18, 69, 127, 0.08), 0 2px 6px -1px rgba(18, 69, 127, 0.04)',
        'premium': '0 12px 36px -4px rgba(18, 69, 127, 0.12), 0 4px 12px -2px rgba(18, 69, 127, 0.06)',
        'elevated': '0 20px 48px -6px rgba(18, 69, 127, 0.16), 0 8px 16px -4px rgba(18, 69, 127, 0.08)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(18, 69, 127, 0.05)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
