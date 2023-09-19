// eslint-disable-next-line import/named
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import { MainLayout, ReturnableMainLayout } from '@/layouts/';
import { Home } from './home/home';
import { PurchasesPage } from './purchases/purchases';
import { RootPage } from './root/root';
import { SalesPage } from './sales/sales';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<MainLayout />}>
			<Route index element={<RootPage />} />
			<Route path="/home" element={<Home />} />
			<Route element={<ReturnableMainLayout />}>
				<Route path="/ventas" element={<SalesPage />} />
				<Route path="/compras" element={<PurchasesPage />} />
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
