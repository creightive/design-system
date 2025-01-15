import type { Config } from 'tailwindcss'
import { shadcn } from '@creight/tailwindcss'

const config = {
  content: ['./src/components/**/*.tsx'],
  presets: [shadcn],
  theme: {
    extend: {
      colors: {},
    },
  },
} satisfies Config

export default config
