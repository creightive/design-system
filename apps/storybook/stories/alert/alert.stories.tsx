import { Meta, StoryObj } from '@storybook/react'

import { type VariantProps } from '@creight/ui/variants'
import { Terminal } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle, alertVariants } from '@creight/ui/alert'

type TypeCustomAlertProps = {} & VariantProps<typeof alertVariants>

const meta = {
  title: 'UI/Alert',
  args: {
    variant: 'default',
  },
  render: ({ variant }) => (
    <Alert variant={variant}>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive'],
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<TypeCustomAlertProps>

export default meta

type Story = StoryObj<typeof meta>

//Colors
export const AlertDefaultDemo: Story = {
  args: {
    variant: 'default',
  },
  render: ({ variant }) => (
    <Alert variant={variant}>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
}
export const AlertDestructiveDemo: Story = {
  args: {
    variant: 'destructive',
  },
  render: ({ variant }) => (
    <Alert variant={variant}>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
}

//examples
export const AlertNotTitle: Story = {
  render: ({ variant }) => (
    <Alert variant={variant}>
      <Terminal className="h-4 w-4" />
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
}
export const AlertNotDescription: Story = {
  render: ({ variant }) => (
    <Alert variant={variant}>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
    </Alert>
  ),
}

export const AlertNotIcon: Story = {
  render: ({ variant }) => (
    <Alert variant={variant}>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
}
