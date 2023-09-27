import { Helmet } from 'react-helmet';
import { Form, FormInput } from '@/components';
import { Button, PageTitle, Wrapper } from '@/common/';

export const AddStockPage = () => {
	return (
		<>
			<Helmet>
				<title>Agregar nuevo producto</title>
			</Helmet>
			<PageTitle>Agregar nuevo producto</PageTitle>
			<Wrapper>
				<Form>
					<FormInput label="Código" name="codigo" type="number" />
					<FormInput label="Nombre" name="nombre" />
					<FormInput label="Descripción" name="descripcion" />
					<FormInput label="Categoría" name="categoriaId" />
					<FormInput label="Cantidad" name="cantidad" type="number" />
					<div className="grid grid-cols-2 gap-5">
						<FormInput label="Precio" name="valor" type="number" />
						<FormInput label="Margen de Venta" name="margen" type="number" />
					</div>
					<div className="flex justify-end">
						<Button type="submit">Agregar producto</Button>
					</div>
				</Form>
			</Wrapper>
		</>
	);
};
