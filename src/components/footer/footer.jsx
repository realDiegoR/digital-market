import { Link } from 'react-router-dom';
import { Wrapper } from '@/common';
import { NAV_LINKS } from '@/constants/nav-links';
import logoUrl from '@/assets/images/digital-market.webp';

export const Footer = () => {
	return (
		<footer className="bg-black py-8">
			<Wrapper className="flex justify-between">
				<div>
					<figure className="flex items-start">
						<img src={logoUrl} className="w-20" alt="digital market"></img>
					</figure>
				</div>
				<div>
					<ul className="space-y-3 text-right capitalize">
						{NAV_LINKS.map((link) => (
							<li key={link.url}>
								<Link
									to={link.url}
									className="text-gray-200 transition-colors duration-100 hover:text-gray-300"
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</Wrapper>
		</footer>
	);
};
