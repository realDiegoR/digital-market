import { Helmet } from 'react-helmet';
import { Form, FormInput } from '@/components';
import { Button, PageTitle, Wrapper } from '@/common/';

export const AddAccount = () => {
	return (
		<>
			<Helmet>
				<title> Agregar nueva cuenta</title>
			</Helmet>
			<PageTitle> Agregar nueva cuenta</PageTitle>
			<Wrapper>
				<Form>
					<FormInput label="Codigo" name="codigo" type="number" />
					<FormInput label="Nombre" name="nombre" />
				</Form>
				<div className="mt-6 flex justify-end ">
					<Button type="submit">Crear cuenta</Button>
				</div>
			</Wrapper>
		</>
	);
};
