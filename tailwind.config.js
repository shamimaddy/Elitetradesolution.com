/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'primary-navy': '#161E54',
        'action-red': '#E62727',
        'card-white': '#FFFFFF',
        base: {
          950: '#161E54',
          900: '#121944',
          850: '#0f153a',
          800: '#0b102e',
        },
        ink: {
          100: '#FFFFFF',
          200: '#E5E7EB',
          300: '#9CA3AF',
          400: '#6B7280',
        },
        wine: {
          300: '#E62727',
          400: '#E62727',
          500: '#C81F1F',
        },
        gold: {
          200: '#E62727',
          300: '#E62727',
          400: '#E62727',
          500: '#E62727',
        },
        yellow: {
          400: '#FBBF24',
          500: '#F59E0B',
        },
      },
      boxShadow: {
        glowGold: '0 10px 28px rgba(0,0,0,.20)',
        goldGlow: '0 14px 34px rgba(0,0,0,.24)',
        glowWine: '0 0 0 1px rgba(230,39,39,.35), 0 10px 30px rgba(230,39,39,.18)',
        cardPop: '0 14px 34px rgba(0,0,0,.24)',
        glowCrimson: '0 0 0 1px rgba(230,39,39,.35), 0 10px 30px rgba(230,39,39,.18)',
      },
      backgroundImage: {
        heroRadial:
          'radial-gradient(60% 60% at 10% 10%, rgba(230,39,39,.14) 0%, rgba(230,39,39,0) 55%), radial-gradient(55% 55% at 85% 15%, rgba(255,255,255,.08) 0%, rgba(255,255,255,0) 60%), radial-gradient(60% 70% at 50% 100%, rgba(230,39,39,.08) 0%, rgba(230,39,39,0) 60%)',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
