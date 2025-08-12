import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['./app/**/*.{ts,tsx,mdx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#0EA5E9',
        neutral: {
          50: '#F3F4F6',
          800: '#111827',
          900: '#0B1220',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        heading: ['var(--font-heading)', ...fontFamily.sans],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
export default config
