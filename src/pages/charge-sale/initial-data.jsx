import { Autocomplete, Form, FormInput } from '@/components';
import { Button, LoadingSpinner } from '@/common';
import { useChargeStore } from '@/store/';
import { useFetch } from '@/hooks';
import { getClients } from '@/services/clients';

export const InitialDataPage = () => {
	const { incrementStep, setSubject, subject } = useChargeStore();

	const getBusinessClients = () => {
		const fakeBusinessId = 1;
		return getClients(fakeBusinessId);
	};

	const { data, status } = useFetch({
		cacheId: 'clients',
		queryFunction: getBusinessClients,
		select: (clients) => clients.map((client) => client.perfil),
	});

	const handleSubmit = (data) => {
		setSubject(data.cliente);
		incrementStep();
	};

	if (status === 'loading') return <LoadingSpinner />;

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
				<Autocomplete
					label="Cliente"
					name="cliente"
					placeholder="Nombre del cliente"
					data={data}
					filterFn={(query) => (client) =>
						`${client.nombre} ${client.apellido}`.toLowerCase().includes(query.toLowerCase())
					}
					displayValueFn={(client) => (client ? `${client.nombre} ${client.apellido}` : '')}
				/>
				<Button type="submit" width="full">
					Continuar
				</Button>
			</Form>
		</section>
	);
};
