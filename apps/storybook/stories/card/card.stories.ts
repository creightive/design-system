import { Meta, StoryObj } from '@storybook/react'
import { CardNotificationDemo } from './demo'

const meta = {
  title: 'UI/Card',
  component: CardNotificationDemo,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CardNotificationDemo>

type Story = StoryObj<typeof meta>

export const CardWithNotification: Story = {
  args: {},
}
export default meta
