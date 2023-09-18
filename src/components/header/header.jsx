import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, HamburgerButton, Wrapper } from '@/common';
import { NAV_LINKS } from '@/constants/nav-links';
import logoUrl from '@/assets/images/digital-market.webp';

export const Header = () => {
	const [isHeaderOpen, setIsHeaderOpenOpen] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const headerRef = useRef();

	const toggleHeader = () => {
		setIsHeaderOpenOpen((prev) => !prev);
	};

	const toggleLoggedIn = () => {
		setIsLoggedIn((prev) => !prev);
	};

	return (
		<header ref={headerRef} className="relative h-[70px] bg-black">
			<Wrapper className="flex h-full items-center justify-between">
				<figure>
					<Link to="/">
						<img src={logoUrl} alt="digital market" className="w-20" />
					</Link>
				</figure>
				<div className="flex items-center gap-6">
					{!isLoggedIn ? (
						<Button onClick={toggleLoggedIn} variant="primary">
							Iniciar Sesión
						</Button>
					) : (
						<Button onClick={toggleLoggedIn} variant="danger">
							Salir
						</Button>
					)}
					<HamburgerButton isOpen={isHeaderOpen} toggleMenu={toggleHeader} />
				</div>
			</Wrapper>
			{isHeaderOpen && <HeaderMobileNav headerRef={headerRef} />}
		</header>
	);
};

function HeaderMobileNav({ headerRef }) {
	const header = headerRef.current;
	const rect = header.getBoundingClientRect();

	const height = window.innerHeight - rect.height + 1;
	const absoluteTop = rect.height - 1;

	useEffect(() => {
		document.body.classList.add('max-h-screen', 'overflow-y-hidden');
		window.scroll({ top: 0, behavior: 'smooth' });

		return () => document.body.classList.remove('max-h-screen', 'overflow-y-hidden');
	}, []);

	return (
		<nav className="absolute z-30 w-full bg-black py-2" style={{ height, top: absoluteTop }}>
			<Wrapper>
				<ul>
					{NAV_LINKS.map((link) => (
						<li
							key={link.url}
							className="flex items-center justify-center border-b border-gray-600 py-2.5 last:border-0"
						>
							<Link to={link.url} className="text-gray-300">
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</Wrapper>
		</nav>
	);
}

HeaderMobileNav.propTypes = {
	headerRef: PropTypes.any,
};
