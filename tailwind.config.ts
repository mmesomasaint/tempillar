import colors from 'tailwindcss/colors'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        ...colors,
        'apple-store-pri': '#2563eb',
        'apple-store-faded': '#6b7280',
        'apple-store-faded-max': '#9ca3af',
        'apple-store-outline-faded': '#d1d5db',
        'apple-store-outline-faded-max': '#e5e7eb'
      },
    },
  },
  plugins: [],
}
export default config
