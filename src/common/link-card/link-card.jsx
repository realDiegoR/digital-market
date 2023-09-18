import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const LinkCard = ({ title, icon, children, href }) => {
	return (
		<div className="max-w-sm shadow-md">
			<Link to={href} className="block p-5">
				<div className="mb-3 flex items-center gap-3">
					<span>{icon}</span>
					<p className="text-lg">{title}</p>
				</div>
				<div className="px-1">{children}</div>
			</Link>
		</div>
	);
};

LinkCard.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.element.isRequired,
	children: PropTypes.node.isRequired,
	href: PropTypes.string.isRequired,
};
