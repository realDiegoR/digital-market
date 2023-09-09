import { Outlet } from 'react-router-dom';
import { Footer, Header } from '@/components';

export const MainLayout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};
