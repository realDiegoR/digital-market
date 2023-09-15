import { LinkCard, PageTitle, Wrapper } from '@/common';
import {
	IconTruck,
	IconCash,
	IconCoin,
	IconUser,
	IconArrowLeft,
	IconHome,
} from '@tabler/icons-react';

export const Home = () => {
	return (
		<Wrapper className="whitespace-pre-line">
			<div className="flex flex-row justify-items-center items-center mb-8">
				<IconHome size={40} stroke={1}></IconHome>
				<PageTitle>Hogar</PageTitle>
			</div>
			<div className="grid max-w-full sm:grid-flow-row md:grid-cols-2 gap-14">
				<LinkCard href="#" title="Cargar Venta" icon={<IconArrowLeft />}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
				<LinkCard href="#" title="Cargar compra" icon={<IconArrowLeft />}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
				<LinkCard href="#" title="Lista de ventas" icon={<IconArrowLeft />}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
				<LinkCard href="#" title="Lista de compras" icon={<IconArrowLeft />}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
				<LinkCard href="#" title="Inventario" icon={<IconArrowLeft />}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
			</div>
			<hr className="my-8" />
			<div className="grid max-w-full sm:grid-flow-row md:grid-cols-2 gap-14">
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
			<div className="grid max-w-full sm:grid-flow-row md:grid-cols-2 gap-14 mb-16">
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
