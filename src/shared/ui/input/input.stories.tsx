import type { Meta, StoryObj } from '@storybook/react'
import { Input, InputProps } from './input'

const meta: Meta<typeof Input> = {
	title: 'UI/Input',
	component: Input,
	argTypes: {
		type: {
			control: {
				type: 'select',
				options: ['text', 'number', 'password', 'email', 'date', 'search'],
			},
		},
		className: {
			control: 'text',
		},
	},
}

export default meta

export const Default: StoryObj<InputProps> = {
	args: {
		type: 'text',
	},
}

export const Number: StoryObj<InputProps> = {
	args: {
		type: 'number',
	},
}

export const Password: StoryObj<InputProps> = {
	args: {
		type: 'password',
	},
}

export const Email: StoryObj<InputProps> = {
	args: {
		type: 'email',
		placeholder: 'test@me.com',
	},
}

export const Disabled: StoryObj<InputProps> = {
	args: {
		disabled: true,
	},
}
