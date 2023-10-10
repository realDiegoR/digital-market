import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Autocomplete, Form, FormInput } from '@/components';
import { Button, PageTitle, Table, Wrapper } from '@/common/';
import { useBoundStore } from '@/stores';
import { useFetch, useSale } from '@/hooks';
import { getAccounts } from '@/services/accounts';
import { Checkbox } from './components';

export const CheckoutPage = () => {
	const [receiptOptions, setReceiptOptions] = useState({ print: false, generatePdf: false });
	const { state } = useLocation();
	const navigate = useNavigate();
	const { products, subject, sale } = useBoundStore();
	const { addPayment } = useSale(subject);

	const getAllAccounts = () => {
		const fakeBusinessId = 1;
		return getAccounts(fakeBusinessId);
	};

	const { data } = useFetch({ cacheId: 'accounts', queryFunction: getAllAccounts });

	if (!['Cargar Venta', 'Cargar Compra'].includes(state?.from)) {
		return <Navigate to="/home" />;
	}

	const handleReceiptChange = (updates) => {
		setReceiptOptions((prev) => ({ ...prev, ...updates }));
	};

	const handleSubmit = (data) => {
		addPayment.mutateAsync({
			cuentaId: data.cuenta.id,
			monto: Number(data.monto),
		});
	};

	const totalToPay = products.reduce((acc, product) => acc + product.cantidad * product.valor, 0);

	const tableList = products.map((product) => ({
		producto: product.nombre,
		precio: product.valor,
		cantidad: product.cantidad,
	}));

	return (
		<>
			<Helmet>
				<title>Pasarela de pagos</title>
			</Helmet>
			<PageTitle>
				Pasarela de pagos
				<span className="block text-md text-gray-500">{state.from}</span>
			</PageTitle>
			<Wrapper className="space-y-6 divide-y-2">
				<section className="space-y-2">
					<h2 className="my-4 text-lg">Datos del remito</h2>
					<p>
						Cliente: <span className="capitalize">{`${subject.nombre} ${subject.apellido}`}</span>
					</p>
					<p>Saldo: ${subject.saldo}</p>
					<div className="space-y-3">
						<Checkbox
							id="print-checkbox"
							label="Imprimir"
							value={receiptOptions.print}
							onChange={(ev) => handleReceiptChange({ print: ev.target.checked })}
						/>
						<Checkbox
							id="pdf-checkbox"
							label="Generar en formato PDF"
							value={receiptOptions.generatePdf}
							onChange={(ev) => handleReceiptChange({ generatePdf: ev.target.checked })}
						/>
					</div>
				</section>
				<section>
					<h2 className="my-4 text-lg">Cargar cobro</h2>
					<Form defaultValues={{ cuenta: '', monto: '' }} onSubmit={handleSubmit}>
						<Autocomplete
							label="Cuenta"
							name="cuenta"
							data={data ?? []}
							displayValueFn={(account) => (account ? `${account.nombre}` : '')}
							filterFn={(query) => (account) =>
								account.nombre.toLowerCase().includes(query.toLowerCase())
							}
						/>
						<FormInput label="Monto" name="monto" type="number" />
						<span className="flex justify-end">
							<Button type="submit" variant="secondary">
								Agregar cuenta
							</Button>
						</span>
					</Form>
				</section>
				<div className="pt-4">
					<h2 className="my-4 text-lg">Resumen del carro</h2>
					<Table list={tableList} />
					<p className="mt-2">Total: {totalToPay}</p>
				</div>
				<section>
					<h2 className="my-4 text-lg">Resumen de facturación</h2>
					<p>Total del remito: ${totalToPay}</p>
					<p>Subtotal: $00</p>
					<Table list={sale?.cobros} />
				</section>
				<div className="flex justify-between pt-6">
					<Button variant="danger" onClick={() => navigate(-1, { replace: true })}>
						Cancelar
					</Button>
					<Button>Confimar pago</Button>
				</div>
			</Wrapper>
		</>
	);
};
