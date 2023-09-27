import { IconEdit, IconPlus, IconSearch } from '@tabler/icons-react';
import { Helmet } from 'react-helmet';
import { LinkCard, PageTitle, Wrapper } from '@/common/';

const links = [
	{
		title: 'Agregar nuevo producto',
		href: './nuevo',
		icon: <IconPlus />,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	},
	{
		title: 'Buscar producto',
		href: './buscar',
		icon: <IconSearch />,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	},
	{
		title: 'Modificar producto',
		href: './editar',
		icon: <IconEdit />,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	},
];

export const StockPage = () => {
	return (
		<>
			<Helmet>
				<title>Inventario</title>
			</Helmet>
			<PageTitle>Inventario</PageTitle>
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
