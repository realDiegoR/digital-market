import { Helmet } from 'react-helmet';
import { Form, FormInput } from '@/components';
import { Button, PageTitle, Wrapper } from '@/common/';
import { postProfile } from '@/services/profiles';
import { createProvider } from '@/services/providers';

export const AddNewProvider = () => {
	const fakeBusinessId = 1;

	const handleSubmit = async (data) => {
		const response = await postProfile(data);
		createProvider({ negocioId: fakeBusinessId, perfilId: response.data.id });
	};

	return (
		<>
			<Helmet>
				<title>Agregar nuevo proveedor</title>
			</Helmet>
			<PageTitle>Agregar nuevo proveedor</PageTitle>
			<Wrapper>
				<Form
					onSubmit={handleSubmit}
					defaultValues={{ nombre: '', apellido: '', celular: '', email: '', direccion: '' }}
				>
					<FormInput label="Nombre" name="nombre" />
					<FormInput label="Apellido" name="apellido" />
					<FormInput label="Celular" name="celular" type="number" />
					<FormInput label="Email" name="email" />
					<FormInput label="Dirección" name="direccion" />
					<div className="mt-6 flex justify-end ">
						<Button type="submit">Agregar proveedor</Button>
					</div>
				</Form>
			</Wrapper>
		</>
	);
};
