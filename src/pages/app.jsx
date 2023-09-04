import { MainLayout } from '@/layouts/main.layout';
import { RootPage } from './root/root';

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<MainLayout />}>
			<Route index element={<RootPage />} />
		</Route>
	)
);

export const App = () => {
	return <RouterProvider router={router} />;
};
