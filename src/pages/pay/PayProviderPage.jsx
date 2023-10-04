import { Helmet } from 'react-helmet';
import { Form, FormInput } from '@/components';
import { Button, PageTitle, Wrapper } from '@/common/';

export const PayProviderPage = () => {
	return (
		<>
			<Helmet>
				<title>Pago a proveedor</title>
			</Helmet>
			<PageTitle>Pago a proveedor</PageTitle>
			<Wrapper>
				<Form>
					<FormInput label="Código" name="codigo" type="number" />
					<FormInput label="Nombre" name="nombre" />
					<FormInput label="Saldo" name="saldo" type="number" />
					<FormInput label="Tipo de Pago" name="tipo" />
					<FormInput label="Monto a pagar" name="cobrar" type="number" placeholder="$0" />
					<FormInput label="Fecha" name="fecha" type="date" />
					<div className="flex justify-around">
						<Button variant="danger" type="submit">
							Cancelar
						</Button>
						<Button type="submit">Comprar</Button>
					</div>
				</Form>
			</Wrapper>
		</>
	);
};
