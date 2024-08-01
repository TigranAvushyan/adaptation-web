import React from 'react';

import { ThemeProvider } from '../../src/shared/providers/theme';

export const themeDecorator = (Story) => (
	<ThemeProvider defaultTheme="dark">
		<Story />
	</ThemeProvider>
);
