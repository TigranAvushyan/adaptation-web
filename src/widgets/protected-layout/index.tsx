import { Outlet } from 'react-router-dom';

export const ProtectedLayout = () => {
	// if (!localStorage.getItem('token')) {
	// 	window.location.href = '/login'
	// }

	return (
		<>
			<Outlet />
		</>
	);
};
