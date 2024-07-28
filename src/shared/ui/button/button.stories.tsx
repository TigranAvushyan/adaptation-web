import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'
import { Spinner } from '../spinner/spinner'

const meta: Meta<typeof Button> = {
	component: Button,
	title: 'UI/Button',
	args: {
		children: 'Button',
	},
	argTypes: {
		variant: {
			control: {
				type: 'inline-radio',
			},
			options: [
				'default',
				'destructive',
				'outline',
				'secondary',
				'ghost',
				'link',
			],
		},
	},
	render: (args) => (
		<div>
			<div className="flex gap-3">
				<Button {...args} size={'lg'} />
				<Button {...args} />
				<Button {...args} size={'sm'} />
				<Button {...args} size={'icon'}>
					<Spinner />
				</Button>
			</div>

			<div className="flex gap-3 mt-3">
				<Button {...args} disabled size={'lg'} />
				<Button {...args} disabled />
				<Button {...args} disabled size={'sm'} />
				<Button {...args} disabled size={'icon'}>
					<Spinner />
				</Button>
			</div>
		</div>
	),
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
	args: {
		variant: 'default',
	},
}

export const Secondary: Story = {
	args: {
		variant: 'secondary',
	},
}

export const Destructive: Story = {
	args: {
		variant: 'destructive',
	},
}

export const Outline: Story = {
	args: {
		variant: 'outline',
	},
}

export const Ghost: Story = {
	args: {
		variant: 'ghost',
	},
}

export const Link: Story = {
	args: {
		variant: 'link',
	},
}
