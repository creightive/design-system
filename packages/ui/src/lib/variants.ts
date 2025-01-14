import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { defineConfig } from 'cva'

export const { cva, cx, compose } = defineConfig({
  hooks: {
    onComplete: className => twMerge(className),
  },
})

export type { VariantProps } from 'cva'
