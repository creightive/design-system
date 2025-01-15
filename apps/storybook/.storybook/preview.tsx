// import { Toaster } from '@repo/design-system/components/ui/sonner';
// import { TooltipProvider } from '@repo/design-system/components/ui/tooltip';
// import { ThemeProvider } from '@repo/design-system/providers/theme';
import { withThemeByClassName } from '@storybook/addon-themes';
import { themes } from '@storybook/theming';
import type { Preview } from '@storybook/react';
import { darkUIStorybook, lightUIStorybook, commonTheme } from "./themes-storybook-ui"

import '@creight/ui/themes/originui.css';
import './tailwind.storybook.css'

const preview: Preview = {
  parameters: {
    // https://storybook.js.org/addons/storybook-dark-mode
    darkMode: {
      classTarget: 'html',
      stylePreview: true,
      darkClass: 'dark',
      lightClass: 'light',
      // Override the default dark theme
      dark: { ...themes.dark, ...darkUIStorybook, ...commonTheme },
      // Override the default light theme
      light: { ...themes.normal, ...lightUIStorybook, ...commonTheme },
      // Set the initial theme
      current: 'dark'
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ["Introduction", "Examples", "Shadcn", "Colors", "Typography"],
      },
    },
    chromatic: {
      modes: {
        light: {
          theme: 'light',
          className: 'light',
        },
        dark: {
          theme: 'dark',
          className: 'dark',
        },
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    // (Story) => {
    //   return (
    //     <div className="bg-background">
    //       <ThemeProvider>
    //         <TooltipProvider>
    //           <Story />
    //         </TooltipProvider>
    //         <Toaster />
    //       </ThemeProvider>
    //     </div>
    //   );
    // },
  ],
};

export default preview;
