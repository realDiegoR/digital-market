import { Helmet } from 'react-helmet';
import { Form, FormInput } from '@/components';
import { Button, PageTitle, Wrapper } from '@/common/';
import { useFetch } from '@/hooks';
import { getClients } from '@/services/clients';
import { updateProfile } from '@/services/profiles';

export const EditClient = () => {
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
		if (Object.keys(profileData).length === 0) {
			return;
		}
		const updateProfileData = {
			nombre: profileData.nombre || upClient.nombre,
			apellido: profileData.apellido || upClient.apellido,
			celular: profileData.celular || upClient.celular,
			direccion: profileData.direccion || upClient.direccion,
		};
		await updateProfile(upClient.id, updateProfileData);
	};

	return (
		<>
			<Helmet>
				<title>Modificar cliente</title>
			</Helmet>
			<PageTitle>Modificar cliente</PageTitle>
			<Wrapper>
				<Form onSubmit={handleSubmit}>
					<FormInput label="Correo" name="email" />
					<FormInput label="Nombre" name="nombre" required={false} />
					<FormInput label="Apellido" name="apellido" required={false} />
					<FormInput label="Celular" name="celular" required={false} />
					<FormInput label="Direccion" name="direccion" required={false} />
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
