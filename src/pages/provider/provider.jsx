import { IconProgressCheck, IconSearch, IconUserPlus } from '@tabler/icons-react';
import { Helmet } from 'react-helmet';
import { LinkCard, PageTitle, Wrapper } from '@/common';

const links = [
	{
		title: 'Agregar nuevo proveedor',
		href: './agregar',
		icon: <IconUserPlus />,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	},
	{
		title: 'Buscar provedor',
		href: './buscar',
		icon: <IconSearch />,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	},
	{
		title: 'Modificar datos de proveedor',
		href: './editar',
		icon: <IconProgressCheck />,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	},
];

export const Provider = () => {
	return (
		<>
			<Helmet>
				<title>Proveedores</title>
			</Helmet>
			<PageTitle>Proveedores</PageTitle>
			<Wrapper className="flex flex-col flex-wrap gap-6 sm:flex-row">
				{links.map((link) => (
					<LinkCard key={link.href} href={link.href} title={link.title} icon={link.icon}>
						{link.text}
					</LinkCard>
				))}
			</Wrapper>
		</>
	);
};
