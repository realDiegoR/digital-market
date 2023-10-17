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
import { ChargePurchasePage, ChargeSalePage } from './charge';
import { AddClient, Client, EditClient, SearchClient } from './clients';
import { Home } from './home/';
import { Login } from './login/login';
import { PayProviderPage } from './pay/PayProviderPage';
import { ChargeClientPage } from './payment/ChargeClientPage';
import { AddNewProvider, EditProvider, Provider, SearchProvider } from './provider';
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
				<Route path="/cargar_compra" element={<ChargePurchasePage />} />
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
				<Route path="/proveedores" element={<Provider />} />
				<Route path="/proveedores/agregar" element={<AddNewProvider />} />
				<Route path="/proveedores/buscar" element={<SearchProvider />} />
				<Route path="/proveedores/editar" element={<EditProvider />} />
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
