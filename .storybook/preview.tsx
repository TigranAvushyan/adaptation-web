import type { Preview } from '@storybook/react';

import '../src/app/config/i18n';
import '../src/index.css';
import { themeDecorator } from './decorators/theme-decorator';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},

	decorators: [themeDecorator],
};

export default preview;
