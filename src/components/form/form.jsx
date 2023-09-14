import PropTypes from 'prop-types';
import { FormProvider, useForm } from 'react-hook-form';

export const Form = ({ children, onSubmit, defaultValues }) => {
	const methods = useForm({ defaultValues });

	return (
		<FormProvider {...methods}>
			<form className="flex flex-col gap-6" onSubmit={methods.handleSubmit(onSubmit)}>
				{children}
			</form>
		</FormProvider>
	);
};

Form.propTypes = {
	children: PropTypes.arrayOf(PropTypes.node).isRequired,
	defaultValues: PropTypes.object.isRequired,
	onSubmit: PropTypes.func.isRequired,
};
