import { Outlet } from 'react-router-dom';
import { Footer } from '@/components';

export const MainLayout = () => {
	return (
		<>
			<header className="bg-red-500 w-full h-8"></header>
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};
