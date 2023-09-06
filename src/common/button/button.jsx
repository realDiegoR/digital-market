import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { variantStyles, widthStyles } from './variants';

export const Button = ({ href, variant = 'primary', children, onClick, width = 'max-content' }) => {
	const buttonStyles = variantStyles[variant] + ' ' + widthStyles[width];

	if (href) {
		return (
			<Link to={href} onClick={onClick} className={`${buttonStyles}`}>
				{children}
			</Link>
		);
	}

	return (
		<button onClick={onClick} className={`${buttonStyles}`}>
			{children}
		</button>
	);
};

Button.propTypes = {
	variant: PropTypes.oneOf(Object.keys(variantStyles)),
	width: PropTypes.oneOf(Object.keys(widthStyles)),
	children: PropTypes.node.isRequired,
	href: PropTypes.string,
	onClick: PropTypes.func,
};
