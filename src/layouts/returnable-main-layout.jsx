import { IconArrowLeft } from '@tabler/icons-react';
import { Outlet } from 'react-router-dom';
import { Button, Wrapper } from '@/common';

export const ReturnableMainLayout = () => {
	return (
		<>
			<Wrapper className="mb-5 mt-8">
				<Button variant="terciary" href="..">
					<IconArrowLeft /> Volver
				</Button>
			</Wrapper>
			<Outlet />
		</>
	);
};
