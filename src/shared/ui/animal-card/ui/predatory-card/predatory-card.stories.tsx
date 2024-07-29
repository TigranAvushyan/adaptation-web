import { Meta, StoryObj } from '@storybook/react'
import { PredatoryCard } from './predatory-card'

const meta: Meta<typeof PredatoryCard> = {
	component: PredatoryCard,
	title: 'UI/AnimalCard/PredatoryCard',
}

export default meta

type Story = StoryObj<typeof PredatoryCard>

export const Default: Story = {}
