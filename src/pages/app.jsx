// eslint-disable-next-line import/named
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import { MainLayout, ReturnableMainLayout } from '@/layouts/';
import { ChargeSalePage } from './charge-sale';
import { Home } from './home/';
import { Login } from './login/login';
import { PurchasesPage } from './purchases/';
import { RootPage } from './root/';
import { SalesPage } from './sales/';
import { AddStockPage, EditStockPage, SearchStockPage, StockPage } from './stock';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<MainLayout />}>
			<Route index element={<RootPage />} />
			<Route path="/home" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route element={<ReturnableMainLayout />}>
				<Route path="/cargar_venta" element={<ChargeSalePage />} />
				<Route path="/ventas" element={<SalesPage />} />
				<Route path="/compras" element={<PurchasesPage />} />
				<Route path="/inventario" element={<StockPage />} />
				<Route path="/inventario/nuevo" element={<AddStockPage />} />
				<Route path="/inventario/buscar" element={<SearchStockPage />} />
				<Route path="/inventario/editar" element={<EditStockPage />} />
			</Route>
		</Route>
	)
);

export const App = () => {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<Helmet titleTemplate="%s | Digital Market" defaultTitle="Digital Market" />
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
};
