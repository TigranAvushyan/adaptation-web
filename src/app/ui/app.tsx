import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@/shared/providers/theme';
import { Spinner } from '@/shared/ui/spinner/spinner';

import { router } from '../router/router';
import './global.css';

export const App = () => {
	return (
		<ThemeProvider defaultTheme="dark">
			<Suspense
				fallback={
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						<Spinner variant={'secondary'} size={'xl'} />
					</div>
				}
			>
				<RouterProvider router={router}></RouterProvider>
			</Suspense>
		</ThemeProvider>
	);
};
