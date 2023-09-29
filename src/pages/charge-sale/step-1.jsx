import { Form, FormInput } from '@/components';
import { Button } from '@/common';
import { useChargeStore } from '@/store/';

export const StepOnePage = () => {
	const { incrementStep, setSubject, subject } = useChargeStore();

	const handleSubmit = (data) => {
		setSubject(data.cliente);
		incrementStep();
	};

	return (
		<section>
			<h2 className="my-4 text-lg">Datos iniciales</h2>
			<Form
				onSubmit={handleSubmit}
				defaultValues={{
					fecha: new Intl.DateTimeFormat('es').format(new Date()),
					vendedor: 'Administrador',
					cliente: subject,
				}}
			>
				<FormInput readOnly label="Fecha" name="fecha" />
				<FormInput readOnly label="Vendedor/a" name="vendedor" />
				<FormInput label="Cliente" name="cliente" />
				<Button type="submit" width="full">
					Continuar
				</Button>
			</Form>
		</section>
	);
};
