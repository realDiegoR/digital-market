import { useRef, useState } from 'react';
import Modal from 'react-modal';
import { Form, FormInput } from '@/components';
import { Button, Table } from '@/common';
import { useChargeStore } from '@/store/';

Modal.setAppElement('#root');

export const StepTwoPage = () => {
	const {
		decrementStep,
		incrementStep,
		products,
		addProduct,
		changeProductQuantity,
		removeProduct,
	} = useChargeStore();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProducts, setSelectedProducts] = useState([]);
	const tableRef = useRef();

	const getCheckedRows = () => {
		const table = tableRef.current;
		const rows = Array.from(table.querySelectorAll('tr'));
		const checkedRows = rows.filter((row) => row.querySelector('input')?.checked);
		const checkedProducts = checkedRows.map((row) =>
			products.find((product) => product.producto === row.children[1].textContent)
		);
		return checkedProducts;
	};

	const handleSubmit = (data) => {
		addProduct(data);
		console.log(getCheckedRows());
	};

	return (
		<>
			<section className="space-y-4">
				<h2 className="mt-4 text-lg">Carga de productos</h2>
				<Form onSubmit={handleSubmit} defaultValues={{ producto: '', cantidad: 1 }}>
					<div className="grid w-full grid-cols-[minmax(0,_3fr)_minmax(0,_1fr)] gap-5">
						<FormInput label={`Producto`} name="producto" />
						<FormInput
							label="Cantidad"
							name="cantidad"
							type="number"
							min={{ value: 1, message: 'Número invalido' }}
							required={false}
						/>
					</div>
					<span className="flex justify-end">
						<Button type="submit">Agregar a la compra</Button>
					</span>
				</Form>
			</section>
			<section className="my-8 space-y-4 border-t pt-8">
				<h2 className="text-lg">Detalles de la venta</h2>
				<Table list={products} withSelect ref={tableRef} />
			</section>
			<div className="space-y-5">
				<Button onClick={incrementStep} width="full">
					Ir a métodos de pago
				</Button>
				<Button width="full" variant="secondary" onClick={() => setIsModalOpen((prev) => !prev)}>
					Modificar selección
				</Button>
				<Button onClick={decrementStep} variant="danger" width="full">
					Retroceder
				</Button>
			</div>
			<Modal
				isOpen={isModalOpen}
				preventScroll
				onAfterOpen={() => setSelectedProducts(getCheckedRows())}
				onRequestClose={() => setIsModalOpen((prev) => !prev)}
				className="absolute inset-5 grid-cols-1 overflow-y-auto border bg-white p-5 outline-none sm:inset-10"
				overlayClassName="fixed inset-0 bg-black/20 z-30"
				style={{ content: { display: 'grid', gridTemplateRows: 'auto 1fr auto', gap: '1rem' } }}
			>
				<h2 className="mt-4 text-center text-lg sm:text-start">Modificar carro de compras</h2>
				<div className="space-y-3">
					{selectedProducts.length > 0 ? (
						selectedProducts.map((product) => (
							<div key={1} className="rounded border p-2">
								<p className="font-bold">{product.producto}</p>
								<p>{product.cantidad}</p>
								<div className="flex flex-wrap gap-2">
									<Button onClick={() => changeProductQuantity(product.producto, 1)}>Sumar</Button>
									<Button
										onClick={() => changeProductQuantity(product.producto, -1)}
										variant="danger"
									>
										Restar
									</Button>
									<Button
										onClick={() => {
											removeProduct(product.producto);
											setSelectedProducts((prev) =>
												prev.filter((p) => p.producto !== product.producto)
											);
										}}
										variant="danger"
									>
										Eliminar
									</Button>
								</div>
							</div>
						))
					) : (
						<p className="rounded border p-5">El carro está vacío.</p>
					)}
				</div>
				<span className="mt-5">
					<Button onClick={() => setIsModalOpen((prev) => !prev)} variant="terciary" width="full">
						Cerrar
					</Button>
				</span>
			</Modal>
		</>
	);
};
