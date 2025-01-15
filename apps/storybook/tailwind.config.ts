import type { Config } from 'tailwindcss'
import { shadcn } from '@creight/tailwindcss'

const config: Config = {
  content: ['./stories/**/*.{js,ts,jsx,tsx}'],
  presets: [shadcn],
  theme: {},
  plugins: [],
} satisfies Config

export default config
