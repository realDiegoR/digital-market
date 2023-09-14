import { LinkCard, PageTitle, Wrapper } from '@/common';
import { IconTruck } from '@tabler/icons-react';
import { IconCash } from '@tabler/icons-react';
import { IconCoin } from '@tabler/icons-react';
import { IconUser } from '@tabler/icons-react';
import { IconArrowLeft } from '@tabler/icons-react';
import { IconHome } from '@tabler/icons-react';

export const Home = () => {
	return (
		<Wrapper className="whitespace-pre-line">
			<div className="flex flex-row justify-items-center items-center mb-8">
				<IconHome size={40} stroke={1}></IconHome>
				<PageTitle>Hogar</PageTitle>
			</div>
			<div className="grid max-w-full sm:grid-flow-row md:grid-cols-2 gap-14">
				<LinkCard href="/page" title="Cargar Venta" icon={<IconArrowLeft />}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
				<LinkCard href="/page" title="Cargar compra" icon={<IconArrowLeft />}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
				<LinkCard href="/page" title="Lista de ventas" icon={<IconArrowLeft />}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
				<LinkCard href="/page" title="Lista de compras" icon={<IconArrowLeft />}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
				<LinkCard href="/page" title="Inventario" icon={<IconArrowLeft />}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
			</div>
			<hr className="my-8" />
			<div className="grid max-w-full sm:grid-flow-row md:grid-cols-2 gap-14">
				<LinkCard href="/page" title="Clientes" icon={<IconUser />}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
				<LinkCard href="/page" title="Proveedores" icon={<IconTruck />}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
				<LinkCard href="/page" title="Cobrar" icon={<IconCoin />}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
				<LinkCard href="/page" title="Pagar" icon={<IconCash />}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
			</div>
			<hr className="my-8" />
			<div className="grid max-w-full sm:grid-flow-row md:grid-cols-2 gap-14 mb-16">
				<LinkCard href="/page" title="Gastos" icon={<IconUser />}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
				<LinkCard href="/page" title="Cuentas" icon={<IconTruck />}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
			</div>
		</Wrapper>
	);
};
