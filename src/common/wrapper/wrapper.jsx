import PropTypes from 'prop-types';

export const Wrapper = ({ children, className = '' }) => {
	return <div className={`w-11/12 mx-auto max-w-7xl ${className}`}>{children}</div>;
};

Wrapper.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
