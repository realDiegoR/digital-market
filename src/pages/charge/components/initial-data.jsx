import PropTypes from 'prop-types';
import { Autocomplete, Form, FormInput } from '@/components';
import { Button } from '@/common';
import { useChargeStore } from '@/store/';
import { useFetch } from '@/hooks';

export const InitialDataPage = ({ fetchProfiles, profile }) => {
	const { incrementStep, setSubject, subject } = useChargeStore();

	const getProfiles = () => {
		const fakeBusinessId = 1;
		return fetchProfiles(fakeBusinessId);
	};

	const { data } = useFetch({
		cacheId: profile.toLowerCase(),
		queryFunction: getProfiles,
		select: (profiles) => profiles.map((profile) => profile.perfil),
	});

	const handleSubmit = (data) => {
		setSubject(data.perfil);
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
					perfil: subject,
				}}
			>
				<FormInput readOnly label="Fecha" name="fecha" />
				<FormInput readOnly label="Vendedor/a" name="vendedor" />
				<Autocomplete
					label={profile}
					name="perfil"
					placeholder={`Nombre del ${profile}`}
					data={data ?? []}
					filterFn={(query) => (profile) =>
						`${profile.nombre} ${profile.apellido}`.toLowerCase().includes(query.toLowerCase())
					}
					displayValueFn={(profile) => (profile ? `${profile.nombre} ${profile.apellido}` : '')}
				/>
				<Button type="submit" width="full">
					Continuar
				</Button>
			</Form>
		</section>
	);
};

InitialDataPage.propTypes = {
	fetchProfiles: PropTypes.func.isRequired,
	profile: PropTypes.string.isRequired,
};
