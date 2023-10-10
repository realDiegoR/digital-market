import PropTypes from 'prop-types';

export const Checkbox = ({ id, label, value, onChange }) => {
	return (
		<div className="flex items-center">
			<input
				id={id}
				type="checkbox"
				value={value}
				onChange={(ev) => onChange(ev)}
				className="h-4 w-4 cursor-pointer rounded border-gray-300 bg-gray-100 text-blue-600   focus:ring-2 focus:ring-blue-500"
			/>
			<label htmlFor={id} className="ml-2 cursor-pointer text-sm font-medium text-gray-900 ">
				{label}
			</label>
		</div>
	);
};

Checkbox.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
};
