import PropTypes from 'prop-types';
import { Form as RHForm, FormProvider, useForm } from 'react-hook-form';
import { API_URL } from '@/constants/api';

export const Form = ({
	action,
	children,
	onSuccess,
	onError,
	method,
	validateStatus,
	onSubmit,
	defaultValues,
}) => {
	const methods = useForm({ defaultValues });

	return (
		<FormProvider {...methods}>
			<RHForm
				className="flex flex-col gap-6"
				action={API_URL + action}
				onSuccess={onSuccess}
				onError={onError}
				onSubmit={onSubmit}
				method={method}
				validateStatus={validateStatus}
				headers={{ 'Content-Type': 'application/json' }}
			>
				{children}
			</RHForm>
		</FormProvider>
	);
};

Form.propTypes = {
	action: PropTypes.string.isRequired,
	children: PropTypes.arrayOf(PropTypes.node).isRequired,
	defaultValues: PropTypes.object.isRequired,
	onSuccess: PropTypes.func,
	onError: PropTypes.func,
	onSubmit: PropTypes.func,
	validateStatus: PropTypes.func,
	method: PropTypes.oneOf(['GET', 'POST', 'PUT', 'PATCH', 'DELETE']),
};
