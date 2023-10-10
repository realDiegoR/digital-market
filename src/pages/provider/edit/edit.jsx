import { Helmet } from 'react-helmet';
import { Form, FormInput } from '@/components';
import { Button, PageTitle, Wrapper } from '@/common/';

export const EditProvider = () => {
	return (
		<>
			<Helmet>
				<title>Modificar proveedor</title>
			</Helmet>
			<PageTitle>Modificar proveedor</PageTitle>
			<Wrapper>
				<Form>
					<FormInput label="Código" name="codigo" type="number" />
					<FormInput label="Nombre" name="nombre" />
					<FormInput label="Telefono" name="telefono" />
					<FormInput label="Correo" name="correo" />
					<FormInput label="Direccion" name="direccion" />
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
