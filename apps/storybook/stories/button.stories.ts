import { Meta, StoryObj } from '@storybook/react'
import { Button } from '@creight/ui/button'
import { fn } from '@storybook/test'

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'ghost', 'link', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'icon', 'sm', 'lg'],
    },
  },
  parameters: {
    layout: 'centered',
  },
  // 👇 Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

//color
export const Default: Story = {
  args: {
    variant: 'default',
    children: 'ButtonShadcn',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'ButtonShadcn',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'ButtonShadcn',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'ButtonShadcn',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'ButtonShadcn',
  },
}
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'ButtonShadcn',
  },
}

//size

export const SizeDefault: Story = {
  args: {
    size: 'default',
    children: 'ButtonShadcn',
  },
}
export const SizeIcon: Story = {
  args: {
    size: 'icon',
    children: 'icon',
  },
}
export const SizeLarge: Story = {
  args: {
    size: 'lg',
    children: 'ButtonShadcn',
  },
}

export const SizeSmall: Story = {
  args: {
    size: 'sm',
    children: 'ButtonShadcn',
  },
}
