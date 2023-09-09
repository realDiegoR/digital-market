import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
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
		<header ref={headerRef} className="relative bg-black max-h-[80px]">
			<Wrapper className="flex h-full justify-between items-center">
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

	useEffect(() => {
		document.body.classList.add('max-h-screen', 'overflow-y-hidden');
		window.scroll({ top: 0, behavior: 'smooth' });

		return () => document.body.classList.remove('max-h-screen', 'overflow-y-hidden');
	}, []);

	return (
		<nav
			className="absolute w-full py-2 bg-black z-30 over"
			style={{ height: window.innerHeight - rect.height + 1, top: rect.height - 1 }}
		>
			<Wrapper>
				<ul>
					{NAV_LINKS.map((link) => (
						<li
							key={link.url}
							className="flex justify-center items-center py-2.5 border-b border-gray-600 last:border-0"
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
