import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const LinkCard = ({ title, icon, children, href }) => {
	return (
		<div className="shadow-md max-w-sm">
			<Link to={href} className="p-5 block">
				<div className="flex gap-3 items-center mb-3">
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
