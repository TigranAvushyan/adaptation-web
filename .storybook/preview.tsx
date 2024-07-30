import type { Preview } from '@storybook/react';
import React from 'react';

import '../src/index.css';
import { ThemeProvider } from '../src/shared/providers/theme';

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
