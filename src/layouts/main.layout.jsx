import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
	return (
		<>
			<header className="bg-red-500 w-full h-8"></header>
			<main>
				<Outlet />
			</main>
			<footer></footer>
		</>
	);
};
