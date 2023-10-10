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
	disabled = false,
}) => {
	const buttonStyles = variantStyles[variant] + ' ' + widthStyles[width];

	if (href) {
		const hrefUrl = typeof href === 'string' ? href : href.pathname;
		const hrefState = typeof href === 'string' ? {} : href.state;
		return (
			<Link
				to={hrefUrl}
				state={hrefState}
				onClick={onClick}
				className={`${buttonStyles} ${
					disabled ? 'pointer-events-none opacity-50' : 'pointer-events-auto'
				}`}
				relative="path"
			>
				{children}
			</Link>
		);
	}

	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`${buttonStyles} ${disabled ? 'opacity-50' : 'opacity-100'}`}
			type={type}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	variant: PropTypes.oneOf(Object.keys(variantStyles)),
	width: PropTypes.oneOf(Object.keys(widthStyles)),
	children: PropTypes.node.isRequired,
	href: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	type: PropTypes.oneOf(['button', 'reset', 'submit']),
};
