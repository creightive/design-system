# @creight/tailwindcss

This package is a wrapper around the tailwindcss configuration for the creight design system. It is used to provide a consistent tailwindcss configuration for the creight design system.

## Installation

```bash
pnpm install @creight/tailwindcss
```

## Usage

```ts
// tailwind.config.ts
import { shadcn } from '@creight/tailwindcss'

export default {
  presets: [shadcn],
  content: [
    // Add your content here
  ],
}
```

## Note

This current implementation requires the user to define the css variables.

## TODO

- [ ] Add a way to extend the shadcn preset
- [ ] Add a way to add custom components to the tailwind config
- [ ] Add a way to add custom utilities to the tailwind config
- [ ] Add a way to add custom plugins to the tailwind config
- [ ] Add a way to add custom themes to the tailwind config
