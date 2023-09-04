import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const LinkCard = ({ title, icon, children, href }) => {
	return (
		<Link to={href}>
			<div className="p-5 shadow-md max-w-sm">
				<div className="flex gap-3 items-center mb-3">
					<span className="">{icon}</span>
					<p className="text-lg">{title}</p>
				</div>
				<div className="px-1">{children}</div>
			</div>
		</Link>
	);
};

LinkCard.propTypes = {
	title: PropTypes.string,
	icon: PropTypes.element,
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	href: PropTypes.string,
};
