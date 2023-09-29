import {
	IconArrowLeft,
	IconCash,
	IconCoin,
	IconHome,
	IconTruck,
	IconUser,
} from '@tabler/icons-react';
import { Helmet } from 'react-helmet';
import { LinkCard, PageTitle, Wrapper } from '@/common';

export const Home = () => {
	return (
		<Wrapper className="whitespace-pre-line">
			<Helmet>
				<title>Home</title>
			</Helmet>
			<div className="mb-8 flex flex-row items-center justify-items-center">
				<IconHome size={40} stroke={1}></IconHome>
				<PageTitle>Hogar</PageTitle>
			</div>
			<div className="grid max-w-full gap-14 sm:grid-flow-row md:grid-cols-2">
				<LinkCard href="/cargar_venta" title="Cargar Venta" icon={<IconArrowLeft />}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
				<LinkCard href="#" title="Cargar compra" icon={<IconArrowLeft />}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
				<LinkCard href="/ventas" title="Lista de ventas" icon={<IconArrowLeft />}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
				<LinkCard href="/compras" title="Lista de compras" icon={<IconArrowLeft />}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
				<LinkCard href="/inventario" title="Inventario" icon={<IconArrowLeft />}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
			</div>
			<hr className="my-8" />
			<div className="grid max-w-full gap-14 sm:grid-flow-row md:grid-cols-2">
				<LinkCard href="#" title="Clientes" icon={<IconUser />}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
				<LinkCard href="#" title="Proveedores" icon={<IconTruck />}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
				<LinkCard href="#" title="Cobrar" icon={<IconCoin />}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
				<LinkCard href="#" title="Pagar" icon={<IconCash />}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
			</div>
			<hr className="my-8" />
			<div className="mb-16 grid max-w-full gap-14 sm:grid-flow-row md:grid-cols-2">
				<LinkCard href="#" title="Gastos" icon={<IconUser />}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
				<LinkCard href="#" title="Cuentas" icon={<IconTruck />}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
			</div>
		</Wrapper>
	);
};
