import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from '@/common/';

export const PageTitle = ({ children }) => {
	const [isBlurred, setIsBlurred] = useState(false);
	const titleRef = useRef();

	const updateScroll = () => {
		if (window.scrollY > 50) return;
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
			className={`text-xl py-3 sticky top-0 transition-[backgroundColor,_box-shadow] duration-200 ${
				isBlurred
					? 'shadow-md backdrop-blur bg-white/80 backdrop-saturate-100'
					: 'shadow-none backdrop-blur-none'
			}`}
			onClick={(ev) => console.log(ev)}
		>
			<Wrapper>{children}</Wrapper>
		</h1>
	);
};

PageTitle.propTypes = {
	children: PropTypes.node.isRequired,
};
