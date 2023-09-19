// eslint-disable-next-line import/named
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import { MainLayout, ReturnableMainLayout } from '@/layouts/';
import { Table } from '../common/table';
import { Home } from './home/home';
import { RootPage } from './root/root';
import { SalesPage } from './sales/sales';

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
			<Route path="/home" element={<Home />} />
			<Route element={<ReturnableMainLayout />}>
				<Route path="/sales" element={<SalesPage />} />
				<Route path="/testtabla" element={<Table list={info} withSelect={true} />} />
			</Route>
		</Route>
	)
);

export const App = () => {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
};
