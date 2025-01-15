import { defineConfig } from 'tsup'

export default defineConfig(options => ({
  entryPoints: {
    alert: 'src/components/alert.tsx',
    'alert-dialog': 'src/components/alert-dialog.tsx',
    accordion: 'src/components/accordion.tsx',
    button: 'src/components/button.tsx',
    tooltip: 'src/components/tooltip.tsx',
    toast: 'src/components/toast.tsx',
    'hooks/use-toast': 'src/hooks/use-toast.ts',
    'themes/originui': 'src/themes/originui/index.css',
  },
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  external: ['react'],
  clean: true,
  ...options,
}))
