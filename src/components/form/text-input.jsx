import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

export const FormInput = ({
	type = 'text',
	label,
	name,
	placeholder,
	maxLength,
	pattern,
	minLength,
	max,
	min,
	required = 'Este campo es requerido.',
	readOnly = false,
}) => {
	const { register, formState } = useFormContext();

	const errorMessage = formState.errors[name]?.message;

	return (
		<label className="flex flex-col gap-1.5">
			<span className="text-sm font-bold">{label}</span>
			<input
				type={type}
				className="rounded border-2 border-black/50 bg-transparent p-2 read-only:border-black/30 read-only:bg-gray-200 read-only:text-black/90"
				onChange={() => console.log(formState)}
				placeholder={placeholder}
				readOnly={readOnly}
				{...register(name, { required, maxLength, pattern, minLength, max, min })}
			/>
			{errorMessage ? (
				<span className="block border border-red-300 bg-red-200/25 px-4 py-2 text-red-950">
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
	type: PropTypes.oneOf(['text', 'password', 'email', 'tel', 'url', 'number', 'date']),
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
