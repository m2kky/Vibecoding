import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#f5f5f5',
          900: '#212121',
        },
        teal: '#008080',
        red: '#e63946',
        accent: '#E31B23',
        dark: '#0B0B0C',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(64px, 10vw, 160px)',
      },
    },
  },
  plugins: [],
}
export default config