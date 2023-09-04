import { IconPlus } from '@tabler/icons-react';
import { LinkCard, Wrapper } from '@/common/';

export const RootPage = () => {
	return (
		<Wrapper>
			<LinkCard
				href="/page"
				title="Agregar nuevo producto"
				icon={<IconPlus size={32} stroke={1} />}
			>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			</LinkCard>
		</Wrapper>
	);
};
