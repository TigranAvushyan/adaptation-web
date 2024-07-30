import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '../src/shared/providers/theme';
import '../src/index.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story) => (
			<ThemeProvider defaultTheme="dark">
				<Story />
			</ThemeProvider>
		),
	],
};

export default preview;
