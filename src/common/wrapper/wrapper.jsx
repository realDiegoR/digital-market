import PropTypes from 'prop-types';

export const Wrapper = ({ children }) => {
	return <div className="w-11/12 mx-auto max-w-7xl">{children}</div>;
};

Wrapper.propTypes = {
	children: PropTypes.element,
};
