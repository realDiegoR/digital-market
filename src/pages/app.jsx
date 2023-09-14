import { MainLayout } from '@/layouts/main.layout';
import { RootPage } from './root/root';
import { Table } from '../common/table';

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import { Home } from './home';

const info = [
	{
		codigo: 1223344,
		producto: 'manzana pera casa mi mama me mima',
		precio: 22.3,
		importe: 3,
	},
	{
		codigo: 897987,
		producto: 'frutilladddddddddddddddddddddddddddddddddddddddasdasd',
		precio: 22.3,
		importe: 3,
	},
	{
		codigo: 897987,
		producto: 'frutilla',
		precio: 22.3,
		importe: 3,
	},
];

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<MainLayout />}>
			<Route index element={<RootPage />} />
			<Route path="/testtabla" element={<Table list={info} withSelect={true} />} />
			<Route path="/home" element={Home()} />
		</Route>
	)
);

export const App = () => {
	return <RouterProvider router={router} />;
};
