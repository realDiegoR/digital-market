import { IconPlus } from '@tabler/icons-react';
import { LinkCard, Wrapper, PageTitle } from '@/common/';

export const RootPage = () => {
	return (
		<>
			<PageTitle>Home</PageTitle>
			<Wrapper>
				<LinkCard
					href="/page"
					title="Agregar nuevo producto"
					icon={<IconPlus size={32} stroke={1} />}
				>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
				<div className="h-[120rem] bg-gray-400"></div>
			</Wrapper>
		</>
	);
};
