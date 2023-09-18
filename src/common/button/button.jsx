import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { variantStyles, widthStyles } from './variants';

export const Button = ({
	href,
	variant = 'primary',
	children,
	onClick,
	width = 'max-content',
	type = 'button',
}) => {
	const buttonStyles = variantStyles[variant] + ' ' + widthStyles[width];

	if (href) {
		return (
			<Link to={href} onClick={onClick} className={`${buttonStyles}`}>
				{children}
			</Link>
		);
	}

	return (
		<button onClick={onClick} className={`${buttonStyles}`} type={type}>
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
	type: PropTypes.oneOf(['button', 'reset', 'submit']),
};
