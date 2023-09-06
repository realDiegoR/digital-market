import { useState } from 'react';
import { IconPlus, IconUser } from '@tabler/icons-react';
import { LinkCard, Wrapper, PageTitle, HamburgerButton, Button } from '@/common/';
export const RootPage = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<>
			<PageTitle>Home</PageTitle>
			<Wrapper>
				<HamburgerButton isOpen={isOpen} toggleMenu={toggle} />
				<LinkCard
					href="/page"
					title="Agregar nuevo producto"
					icon={<IconPlus size={32} stroke={1} />}
				>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
				<Button variant="secondary" onClick={() => alert(2)} width="max-content">
					<IconUser /> Agregar producto
				</Button>
				<div className="h-[120rem] bg-gray-400"></div>
			</Wrapper>
		</>
	);
};
