import { Outlet } from 'react-router-dom';
import { Footer, Header } from '@/components';

export const MainLayout = () => {
	return (
		<div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};
