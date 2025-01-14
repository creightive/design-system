import { defineConfig } from 'tsup'

export default defineConfig(options => ({
  entryPoints: {
    button: 'src/components/button.tsx',
    'themes/originui': 'src/themes/originui/index.css',
  },
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  external: ['react'],
  clean: true,
  ...options,
}))
