import { defineConfig } from 'tsup'

export default defineConfig(options => ({
  entryPoints: {
    alert: 'src/components/alert.tsx',
    'alert-dialog': 'src/components/alert-dialog.tsx',
    accordion: 'src/components/accordion.tsx',
    'aspect-ratio': 'src/components/aspect-ratio.tsx',
    avatar: 'src/components/avatar.tsx',
    badge: 'src/components/badge.tsx',
    button: 'src/components/button.tsx',
    calendar: 'src/components/calendar.tsx',
    card: 'src/components/card.tsx',
    checkbox: 'src/components/checkbox.tsx',
    collapsible: 'src/components/collapsible.tsx',
    command: 'src/components/command.tsx',
    'context-menu': 'src/components/context-menu.tsx',
    dialog: 'src/components/dialog.tsx',
    'dropdown-menu': 'src/components/dropdown-menu.tsx',
    form: 'src/components/form.tsx',
    'hover-card': 'src/components/hover-card.tsx',
    input: 'src/components/input.tsx',
    label: 'src/components/label.tsx',
    menubar: 'src/components/menubar.tsx',
    'navigation-menu': 'src/components/navigation-menu.tsx',
    popover: 'src/components/popover.tsx',
    progress: 'src/components/progress.tsx',
    'radio-group': 'src/components/radio-group.tsx',
    'scroll-area': 'src/components/scroll-area.tsx',
    select: 'src/components/select.tsx',
    separator: 'src/components/separator.tsx',
    skeleton: 'src/components/skeleton.tsx',
    slider: 'src/components/slider.tsx',
    switch: 'src/components/switch.tsx',
    table: 'src/components/table.tsx',
    tabs: 'src/components/tabs.tsx',
    textarea: 'src/components/textarea.tsx',
    toast: 'src/components/toast.tsx',
    toggle: 'src/components/toggle.tsx',
    'toggle-group': 'src/components/toggle-group.tsx',
    tooltip: 'src/components/tooltip.tsx',
    'lib/variants': 'src/lib/variants.ts',
    'hooks/use-toast': 'src/hooks/use-toast.ts',
    'themes/originui': 'src/themes/originui/index.css',
    'themes/ada': 'src/themes/ada/index.css',
  },
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  external: ['react'],
  clean: true,
  ...options,
}))
