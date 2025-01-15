import { Meta, StoryObj } from '@storybook/react'
import { CalendarDemo } from './demo'

//meta
const meta = {
  title: 'UI/Date',
  component: CalendarDemo,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CalendarDemo>

export default meta

type Story = StoryObj<typeof meta>

export const Calendar: Story = {
  args: {},
}
