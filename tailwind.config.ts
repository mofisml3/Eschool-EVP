import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#08798C',
          'primary-dark': '#04576A',
          'primary-light': '#E6F2F4',
          secondary: '#71B36E',
          'secondary-dark': '#558E54',
          'secondary-light': '#EEF6ED',
        },
        ink: {
          900: '#0E1B22',
          700: '#3A4A52',
          500: '#6B7A82',
          200: '#E3E8EB',
          100: '#F4F6F7',
        },
        state: {
          warning: '#C58A2A',
          'warning-bg': '#FCF4E5',
          'warning-text': '#7B5915',
          danger: '#B0432F',
        },
      },
      fontFamily: {
        sans: [
          '"IBM Plex Sans Arabic"',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Tahoma',
          'sans-serif',
        ],
      },
      borderRadius: {
        card: '12px',
        'card-lg': '16px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(14, 27, 34, 0.04), 0 4px 12px rgba(14, 27, 34, 0.06)',
        'card-hover':
          '0 2px 4px rgba(14, 27, 34, 0.06), 0 8px 24px rgba(14, 27, 34, 0.08)',
      },
    },
  },
  plugins: [],
} satisfies Config;
