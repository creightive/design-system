export interface ShadcnTokens {
  background: string
  foreground: string
  card: string
  'card-foreground': string
  popover: string
  'popover-foreground': string
  primary: string
  'primary-foreground': string
  secondary: string
  'secondary-foreground': string
  muted: string
  'muted-foreground': string
  accent: string
  'accent-foreground': string
  destructive: string
  'destructive-foreground': string
  border: string
  input: string
  ring: string
  radius?: string
  'chart-1': string
  'chart-2': string
  'chart-3': string
  'chart-4': string
  'chart-5': string
  'sidebar-background': string
  'sidebar-foreground': string
  'sidebar-primary': string
  'sidebar-primary-foreground': string
  'sidebar-accent': string
  'sidebar-accent-foreground': string
  'sidebar-border': string
  'sidebar-ring': string
}

export const baseTokensAsConfig: ShadcnTokens = {
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  card: 'hsl(var(--card))',
  'card-foreground': 'hsl(var(--card-foreground))',
  popover: 'hsl(var(--popover))',
  'popover-foreground': 'hsl(var(--popover-foreground))',
  primary: 'hsl(var(--primary))',
  'primary-foreground': 'hsl(var(--primary-foreground))',
  secondary: 'hsl(var(--secondary))',
  'secondary-foreground': 'hsl(var(--secondary-foreground))',
  muted: 'hsl(var(--muted))',
  'muted-foreground': 'hsl(var(--muted-foreground))',
  accent: 'hsl(var(--accent))',
  'accent-foreground': 'hsl(var(--accent-foreground))',
  destructive: 'hsl(var(--destructive))',
  'destructive-foreground': 'hsl(var(--destructive-foreground))',
  border: 'hsl(var(--border))',
  input: 'hsl(var(--input))',
  ring: 'hsl(var(--ring))',
  radius: 'hsl(var(--radius))',
  'chart-1': 'hsl(var(--chart-1))',
  'chart-2': 'hsl(var(--chart-2))',
  'chart-3': 'hsl(var(--chart-3))',
  'chart-4': 'hsl(var(--chart-4))',
  'chart-5': 'hsl(var(--chart-5))',
  'sidebar-background': 'hsl(var(--sidebar-background))',
  'sidebar-foreground': 'hsl(var(--sidebar-foreground))',
  'sidebar-primary': 'hsl(var(--sidebar-primary))',
  'sidebar-primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  'sidebar-accent': 'hsl(var(--sidebar-accent))',
  'sidebar-accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  'sidebar-border': 'hsl(var(--sidebar-border))',
  'sidebar-ring': 'hsl(var(--sidebar-ring))',
}

type ShadcnCSSTokens = {
  [K in keyof ShadcnTokens as `--${K & string}`]: string
}

export const baseTokensAsCSS: Record<'light' | 'dark', ShadcnCSSTokens> = {
  light: {
    '--background': '0 0% 100%',
    '--foreground': '240 10% 3.9%',
    '--card': '0 0% 100%',
    '--card-foreground': '240 10% 3.9%',
    '--popover': '0 0% 100%',
    '--popover-foreground': '240 10% 3.9%',
    '--primary': '240 5.9% 10%',
    '--primary-foreground': '0 0% 98%',
    '--secondary': '240 4.8% 95.9%',
    '--secondary-foreground': '240 5.9% 10%',
    '--muted': '240 4.8% 95.9%',
    '--muted-foreground': '240 3.8% 46.1%',
    '--accent': '240 4.8% 95.9%',
    '--accent-foreground': '240 5.9% 10%',
    '--destructive': '0 84.2% 60.2%',
    '--destructive-foreground': '0 0% 100%',
    '--border': '240 5.9% 90%',
    '--input': '240 4.9% 83.9%',
    '--ring': '240 5% 64.9%',
    '--chart-1': '12 76% 61%',
    '--chart-2': '173 58% 39%',
    '--chart-3': '197 37% 24%',
    '--chart-4': '43 74% 66%',
    '--chart-5': '27 87% 67%',
    '--sidebar-background': '0 0% 98%',
    '--sidebar-foreground': '240 5.3% 26.1%',
    '--sidebar-primary': '240 5.9% 10%',
    '--sidebar-primary-foreground': '0 0% 98%',
    '--sidebar-accent': '240 4.8% 95.9%',
    '--sidebar-accent-foreground': '240 5.9% 10%',
    '--sidebar-border': '220 13% 91%',
    '--sidebar-ring': '217.2 91.2% 59.8%',
    '--radius': '0.5rem',
  },
  dark: {
    '--background': '240 10% 3.9%',
    '--foreground': '0 0% 98%',
    '--card': '240 10% 3.9%',
    '--card-foreground': '0 0% 98%',
    '--popover': '240 10% 3.9%',
    '--popover-foreground': '0 0% 98%',
    '--primary': '0 0% 98%',
    '--primary-foreground': '240 5.9% 10%',
    '--secondary': '240 3.7% 15.9%',
    '--secondary-foreground': '0 0% 98%',
    '--muted': '240 5.9% 10%',
    '--muted-foreground': '240 4.4% 58%',
    '--accent': '240 5.9% 10%',
    '--accent-foreground': '0 0% 98%',
    '--destructive': '0 84.2% 60.2%',
    '--destructive-foreground': '0 0% 100%',
    '--border': '240 3.7% 15.9%',
    '--input': '240 3.7% 15.9%',
    '--ring': '240 3.8% 46.1%',
    '--chart-1': '220 70% 50%',
    '--chart-2': '160 60% 45%',
    '--chart-3': '30 80% 55%',
    '--chart-4': '280 65% 60%',
    '--chart-5': '340 75% 55%',
    '--sidebar-background': '240 5.9% 10%',
    '--sidebar-foreground': '240 4.8% 95.9%',
    '--sidebar-primary': '224.3 76.3% 48%',
    '--sidebar-primary-foreground': '0 0% 100%',
    '--sidebar-accent': '240 3.7% 15.9%',
    '--sidebar-accent-foreground': '240 4.8% 95.9%',
    '--sidebar-border': '240 3.7% 15.9%',
    '--sidebar-ring': '217.2 91.2% 59.8%',
  },
}

export const defineShadcn = (tokens: Partial<ShadcnTokens>, baseTokens?: Partial<ShadcnTokens>) => {
  return {
    ...baseTokens,
    ...tokens,
  }
}
