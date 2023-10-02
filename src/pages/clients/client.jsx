import { IconProgressCheck, IconSearch, IconUserPlus } from '@tabler/icons-react';
import { Helmet } from 'react-helmet';
import { LinkCard, PageTitle, Wrapper } from '@/common';

const links = [
	{
		title: 'Agregar nuevo cliente',
		href: './agregar',
		icon: <IconUserPlus />,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	},
	{
		title: 'Buscar cliente',
		href: './buscar',
		icon: <IconSearch />,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	},
	{
		title: 'Modificar datos de cliente',
		href: './editar',
		icon: <IconProgressCheck />,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	},
];

export const Client = () => {
	return (
		<>
			<Helmet>
				<title>Clientes</title>
			</Helmet>
			<PageTitle>Clientes</PageTitle>
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
