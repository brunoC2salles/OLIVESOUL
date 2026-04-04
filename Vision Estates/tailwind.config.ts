import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'off-white': '#F8F6F1',
        'black': '#0A0A0A',
        'navy': {
          900: '#0A1628',
          800: '#0D1F3C',
          700: '#152B52',
          500: '#1E3A6E',
          300: '#4A6FA5',
          100: '#C5D3E8'
        },
        'gold': {
          600: '#B8922A',
          500: '#C9A84C',
          400: '#D4AF37',
          300: '#E8CC7A',
          100: '#F5EDD0'
        },
        'stone': {
          200: '#E8E4DC',
          400: '#9B9589',
          600: '#5C5750'
        }
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-jost)', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace']
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '38': '9.5rem',
        '100': '25rem',
        '120': '30rem'
      }
    }
  },
  plugins: []
}

export default config
