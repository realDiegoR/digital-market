import { Helmet } from 'react-helmet';
import { Form, FormInput } from '@/components';
import { Button, PageTitle, Wrapper } from '@/common/';

export const Spent = () => {
	return (
		<>
			<Helmet>
				<title>Gastos</title>
			</Helmet>
			<PageTitle>Gastos</PageTitle>
			<Wrapper>
				<Form>
					<FormInput label="Fuente" name="razon" type="number" />
					<FormInput label="Razón" name="razon" type="number" />
					<FormInput label="Importe" name="importe" type="number" />
					<div className="flex justify-around">
						<Button variant="danger" type="submit">
							Cancelar
						</Button>
						<Button type="submit">Registrar Gasto</Button>
					</div>
				</Form>
			</Wrapper>
		</>
	);
};
