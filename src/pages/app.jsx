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
import { Account, AddAccount, EditAccount, SearchAccount } from './accounts';
import { ChargeSalePage } from './charge-sale';
import { EditClient } from './clients';
import { AddClient } from './clients/add';
import { Client } from './clients/client';
import { SearchClient } from './clients/search';
import { Home } from './home/';
import { Login } from './login/login';
import { PayProviderPage } from './pay/PayProviderPage';
import { ChargeClientPage } from './payment/ChargeClientPage';
import { PurchasesPage } from './purchases/';
import { RootPage } from './root/';
import { SalesPage } from './sales/';
import { Spent } from './spent';
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
				<Route path="/clientes" element={<Client />} />
				<Route path="/clientes/agregar" element={<AddClient />} />
				<Route path="/clientes/buscar" element={<SearchClient />} />
				<Route path="/clientes/editar" element={<EditClient />} />
				<Route path="/realizar_cobro" element={<ChargeClientPage />} />
				<Route path="/realizar_pago" element={<PayProviderPage />} />
				<Route path="/gasto" element={<Spent />} />
				<Route path="/cuentas" element={<Account />} />
				<Route path="/cuentas/agregar" element={<AddAccount />} />
				<Route path="/cuentas/buscar" element={<SearchAccount />} />
				<Route path="/cuentas/editar" element={<EditAccount />} />
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
