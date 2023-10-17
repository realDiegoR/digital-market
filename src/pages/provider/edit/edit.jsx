import { Helmet } from 'react-helmet';
import { Form, FormInput } from '@/components';
import { Button, PageTitle, Wrapper } from '@/common/';
import { useFetch } from '@/hooks';
import { updateProfile } from '@/services/profiles';
import { getProviders } from '@/services/providers';

export const EditProvider = () => {
	const getBusinessProviders = () => {
		const fakeBusinessId = 1;
		return getProviders(fakeBusinessId);
	};

	const { data } = useFetch({
		cacheId: 'proveedores',
		queryFunction: getBusinessProviders,
		select: (profiles) => profiles.map((profileItem) => profileItem.perfil),
	});

	const handleSubmit = (profileData) => {
		const matchedProvider = data.find((profile) => profile.email === profileData.email);

		if (Object.keys(profileData).length === 0) {
			return;
		}
		const updateProfileData = {
			nombre: profileData.nombre || matchedProvider.nombre,
			apellido: profileData.apellido || matchedProvider.apellido,
			celular: profileData.celular || matchedProvider.celular,
			direccion: profileData.direccion || matchedProvider.direccion,
		};
		updateProfile(matchedProvider.id, updateProfileData);
	};

	return (
		<>
			<Helmet>
				<title>Modificar proveedor</title>
			</Helmet>
			<PageTitle>Modificar proveedor</PageTitle>
			<Wrapper>
				<Form onSubmit={handleSubmit}>
					<FormInput label="Email" name="email" />
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
