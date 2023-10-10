import { Helmet } from 'react-helmet';
import { Form, FormInput } from '@/components';
import { Button, PageTitle, Wrapper } from '@/common/';

export const AddNewProveedor = () => {
	return (
		<>
			<Helmet>
				<title> Agregar nuevo proveedor</title>
			</Helmet>
			<PageTitle> Agregar nuevo proveedor</PageTitle>
			<Wrapper>
				<Form>
					<FormInput label="Nombre" name="nombre" />
					<FormInput label="Teléfono" name="teléfono" type="number" />
					<FormInput label="Correo" name="correo" />
					<FormInput label="Dirección" name="dirreción" />
				</Form>
				<div className="mt-6 flex justify-end ">
					<Button type="submit">Agregar cliente</Button>
				</div>
			</Wrapper>
		</>
	);
};
