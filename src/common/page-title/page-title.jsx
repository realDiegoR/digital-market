import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { Wrapper } from '@/common/';

export const PageTitle = ({ children }) => {
	const [isBlurred, setIsBlurred] = useState(false);
	const titleRef = useRef();

	const updateScroll = () => {
		if (window.scrollY > 150) return;
		const myComponent = titleRef.current;
		const rect = myComponent.getBoundingClientRect();
		const isAtTop = rect.top === 0;
		setIsBlurred(isAtTop);
	};

	useEffect(() => {
		window.addEventListener('scroll', updateScroll);
		return () => window.removeEventListener('scroll', updateScroll);
	}, []);

	return (
		<h1
			ref={titleRef}
			className={`sticky top-0 z-20 py-3 text-xl transition-[backgroundColor,_box-shadow] duration-200 ${
				isBlurred
					? 'bg-white/80 shadow-md backdrop-blur backdrop-saturate-100'
					: 'shadow-none backdrop-blur-none'
			}`}
		>
			<Wrapper>{children}</Wrapper>
		</h1>
	);
};

PageTitle.propTypes = {
	children: PropTypes.node.isRequired,
};
