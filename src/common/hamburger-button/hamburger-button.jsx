import PropTypes from 'prop-types';

export const HamburgerButton = ({ isOpen, toggleMenu }) => {
	const styles = {
		firstStick: isOpen ? 'rotate-45 translate-y-2.5' : 'rotate-0 translate-y-0',
		secondStick: isOpen ? 'opacity-0' : 'opacity-100',
		thirdStick: isOpen ? '-rotate-45 -translate-y-2.5 w-8' : 'w-5 rotate-0 translate-y-0',
	};

	return (
		<button onClick={toggleMenu}>
			<div className="space-y-2 ">
				<span
					data-testid="span"
					className={`block h-0.5 w-8 bg-white transition-transform duration-200 ${styles.firstStick}`}
				></span>
				<span
					data-testid="span"
					className={`block h-0.5 w-8 bg-white transition-opacity duration-200 ${styles.secondStick}`}
				></span>
				<span
					data-testid="span"
					className={`float-right block h-0.5 bg-white transition-all duration-200 ${styles.thirdStick}`}
				></span>
			</div>
		</button>
	);
};

HamburgerButton.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	toggleMenu: PropTypes.func.isRequired,
};
