import { createBrowserRouter } from 'react-router-dom';

import { AuthLayout } from '@/widgets/auth-layout';
import { ProtectedLayout } from '@/widgets/protected-layout';

import { HomePage, LoginPage } from './pages';

export const router: ReturnType<typeof createBrowserRouter> =
	createBrowserRouter([
		{
			path: '/',
			element: <ProtectedLayout />,
			children: [
				{
					index: true,
					element: <HomePage />,
				},
			],
		},
		{
			path: '/auth/',
			element: <AuthLayout />,
			children: [
				{
					path: 'login/',
					element: <LoginPage />,
				},
			],
		},
	]);
