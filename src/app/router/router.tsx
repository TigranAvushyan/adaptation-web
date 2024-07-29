import { ProtectedLayout } from '@/widgets/protected-layout'
import { createBrowserRouter } from 'react-router-dom'
import { HomePage, LoginPage } from './pages'

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
			path: '/login',
			element: <LoginPage />,
		},
	])
