import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

export const FormInput = ({
	type,
	label,
	name,
	placeholder,
	required = 'Este campo es requerido.',
	maxLength,
	pattern,
	minLength,
	max,
	min,
	readOnly = false,
}) => {
	const { register, formState } = useFormContext();

	const errorMessage = formState.errors[name]?.message;

	return (
		<label className="gap-1.5 flex flex-col">
			<span className="font-bold text-sm">{label}</span>
			<input
				className="bg-transparent border-2 p-2 rounded border-black/50 read-only:bg-gray-400/50 read-only:border-black/40"
				onChange={() => console.log(formState)}
				type={type}
				placeholder={placeholder}
				{...register(name, { required, maxLength, pattern, minLength, max, min })}
				readOnly={readOnly}
			/>
			{errorMessage ? (
				<span className="block bg-red-200/25 border border-red-300 py-2 px-4 text-red-950">
					{errorMessage}
				</span>
			) : null}
		</label>
	);
};

const createInputValidationSchema = (propType) =>
	PropTypes.shape({
		value: propType,
		message: PropTypes.string,
	});

FormInput.propTypes = {
	type: PropTypes.oneOf(['text', 'password', 'email', 'tel', 'url', 'number']),
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	required: PropTypes.string, // recibe el mensaje de error
	minLength: createInputValidationSchema(PropTypes.number),
	maxLength: createInputValidationSchema(PropTypes.number),
	min: createInputValidationSchema(PropTypes.number),
	max: createInputValidationSchema(PropTypes.number),
	pattern: createInputValidationSchema(PropTypes.object),
	placeholder: PropTypes.string,
	readOnly: PropTypes.bool,
};
