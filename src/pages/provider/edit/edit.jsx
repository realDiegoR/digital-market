import { Helmet } from 'react-helmet';
import { Form, FormInput } from '@/components';
import { Button, PageTitle, Wrapper } from '@/common/';
import { useFetch } from '@/hooks';
import { getClients } from '@/services/clients';
import { updateProfile } from '@/services/profiles';

export const EditProvider = () => {
	const profile = 'cliente';
	const getUpClient = () => {
		const fakeBusinessId = 1;
		return getClients(fakeBusinessId);
	};
	const { data } = useFetch({
		cacheId: profile.toLowerCase(),
		queryFunction: getUpClient,
		select: (profiles) => profiles.map((profileItem) => profileItem.perfil),
	});

	const handleSubmit = async (profileData) => {
		const upClient = data.find((profile) => profile.email === profileData.email);
		const updateProfileData = {
			nombre: profileData.nombre,
			apellido: profileData.apellido,
			celular: profileData.celular,
			direccion: profileData.direccion,
		};
		await updateProfile(upClient.id, updateProfileData);
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
