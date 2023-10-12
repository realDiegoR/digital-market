import { Helmet } from 'react-helmet';
import { Form, FormInput } from '@/components';
import { Button, PageTitle, Wrapper } from '@/common/';
import { getProfile, updateProfile } from '@/services/profiles';

export const EditProvider = () => {
	const handleSubmit = async (data) => {
		const nombre = data.nombre;
		const profiles = await getProfile(nombre);
		updateProfile({
			profiles,
			nombre: 'Nuevo Nombre',
			apellido: 'Nuevo Apellido',
			celular: 'Nuevo Celular',
			direccion: 'Nueva Dirección',
			email: 'nuevo@email.com',
		});
		console.log(data);
	};
	return (
		<>
			<Helmet>
				<title>Modificar proveedor</title>
			</Helmet>
			<PageTitle>Modificar proveedor</PageTitle>
			<Wrapper>
				<Form onSubmit={handleSubmit}>
					<FormInput label="Nombre" name="nombre" required={false} />
					<FormInput label="Apellido" name="apellido" required={false} />
					<FormInput label="Celular" name="celular" required={false} />
					<FormInput label="Direccion" name="direccion" required={false} />
					<FormInput label="Email" name="email" required={false} />
					<div className="flex justify-around">
						<Button variant="danger" type="submit">
							Cancelar
						</Button>
						<Button type="submit">Guardar Cambios</Button>
					</div>
				</Form>
			</Wrapper>
		</>
	);
};
