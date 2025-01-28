import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        color1: 'red',
        color2: 'green',
        color3: 'blue',
      },
    },
  },
  plugins: [],
} satisfies Config
