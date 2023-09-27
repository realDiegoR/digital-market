import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

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
	style = 'box',
	required = 'Este campo es requerido.',
	readOnly = false,
}) => {
	const { register, formState } = useFormContext();

	const errorMessage = formState.errors[name]?.message;
	let estilo =
		'bg-transparent border-2 p-2 rounded border-black/50 read-only:bg-gray-200 read-only:border-black/30 read-only:text-black/90';

	if (style == 'underlined') {
		estilo = 'border-b-2 border-black focus:outline-none md:w-80';
	}

	return (
		<label className="gap-1.5 flex flex-col">
			<span className="font-bold text-sm">{label}</span>
			<input
				type={type}
				className={estilo}
				onChange={() => console.log(formState)}
				placeholder={placeholder}
				readOnly={readOnly}
				{...register(name, { required, maxLength, pattern, minLength, max, min })}
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
	type: PropTypes.oneOf(['text', 'password', 'email', 'tel', 'url', 'number', 'date']),
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	required: PropTypes.string, // recibe el mensaje de error
	minLength: createInputValidationSchema(PropTypes.number),
	maxLength: createInputValidationSchema(PropTypes.number),
	min: createInputValidationSchema(PropTypes.number),
	max: createInputValidationSchema(PropTypes.number),
	style: PropTypes.oneOf(['box', 'underlined']),
	pattern: createInputValidationSchema(PropTypes.object),
	placeholder: PropTypes.string,
	readOnly: PropTypes.bool,
};
