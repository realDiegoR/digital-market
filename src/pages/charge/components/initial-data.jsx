import PropTypes from 'prop-types';
import { Autocomplete, Form, FormInput } from '@/components';
import { Button } from '@/common';
import { useBoundStore } from '@/stores';
import { useSale } from '@/hooks';

const subjectType = {
	sale: {
		profile: 'cliente',
	},
	purchase: {
		profile: 'proveedor',
	},
};

export const InitialDataPage = ({ type, data, incrementStep }) => {
	const { setSubject, subject, addProduct } = useBoundStore();
	const { createSale, getActiveSale } = useSale();

	const pageType = subjectType[type];

	const handleSubmit = async (data) => {
		setSubject(data.perfil);
		const activeSale = await getActiveSale(data.perfil);
		if (activeSale) {
			activeSale.items.forEach((product) => {
				addProduct(product);
			});
		} else {
			await createSale.mutateAsync(data.perfil.id);
		}
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
					label={pageType.profile}
					name="perfil"
					placeholder={`Nombre del ${pageType.profile}`}
					data={data}
					filterFn={(query) => (profile) =>
						`${profile.nombre} ${profile.apellido} - ${profile.email}`
							.toLowerCase()
							.includes(query.toLowerCase())
					}
					displayValueFn={(profile) =>
						profile ? `${profile.nombre} ${profile.apellido} - ${profile.email}` : ''
					}
				/>
				<Button type="submit" width="full">
					Continuar
				</Button>
			</Form>
		</section>
	);
};

InitialDataPage.propTypes = {
	type: PropTypes.oneOf(['sale', 'purchase']).isRequired,
	data: PropTypes.array.isRequired,
	incrementStep: PropTypes.func.isRequired,
};
