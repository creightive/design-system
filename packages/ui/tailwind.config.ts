import type { Config } from 'tailwindcss'
import { shadcn } from '@creight/tailwindcss'

const config: Pick<Config, 'presets' | 'content'> = {
  content: ['./src/components/**/*.tsx'],
  presets: [shadcn],
}

export default config
