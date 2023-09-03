import { MainLayout } from '@/layouts/main.layout';

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<MainLayout />}>
			<Route index element={<p>Homepage</p>} />
		</Route>
	)
);

export const App = () => {
	return <RouterProvider router={router} />;
};
