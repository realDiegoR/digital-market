import { Dialog } from '@headlessui/react';
import { useRef, useState } from 'react';
import { Autocomplete, Form, FormInput } from '@/components';
import { Button, LoadingSpinner, Table } from '@/common';
import { useChargeStore } from '@/store/';
import { useFetch } from '@/hooks/';
import { getAllProducts } from '@/services/products';

export const LoadProductsPage = () => {
	const {
		decrementStep,
		incrementStep,
		products,
		addProduct,
		changeProductQuantity,
		removeProduct,
	} = useChargeStore();
	const [selectedProducts, setSelectedProducts] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const tableRef = useRef();

	const getBusinessProducts = () => {
		const fakeBusinessId = 1;
		return getAllProducts(fakeBusinessId);
	};

	const getCheckedRows = () => {
		const table = tableRef.current;
		if (!table) return [];
		const rows = Array.from(table.querySelectorAll('tr'));
		const checkedRows = rows.filter((row) => row.querySelector('input')?.checked);
		const checkedProducts = checkedRows.map((row) =>
			products.find((product) => product.producto.nombre === row.children[1].textContent)
		);
		return checkedProducts;
	};

	const test = (ev) => {
		console.log(ev);
	};

	const { data, status } = useFetch({
		cacheId: 'products',
		queryFunction: getBusinessProducts,
	});

	const handleSubmit = (data) => {
		addProduct(data);
		console.log(products);
	};

	const tableList = products.map(({ cantidad, producto }) => ({
		producto: producto.nombre,
		cantidad,
		precio: `$${producto.valor * cantidad}`,
	}));

	if (status === 'loading') return <LoadingSpinner />;

	return (
		<>
			<section className="space-y-4">
				<h2 className="mt-4 text-lg">Carga de productos</h2>
				<Form onSubmit={handleSubmit} defaultValues={{ producto: '', cantidad: 1 }}>
					<div className="grid w-full grid-cols-[minmax(0,_3fr)_minmax(0,_1fr)] gap-5">
						<Autocomplete
							label="Producto"
							name="producto"
							data={data}
							filterFn={(query) => (product) =>
								`${product.nombre}`.toLowerCase().includes(query.toLowerCase())
							}
							displayValueFn={(product) => (product ? `${product.nombre}` : '')}
						/>
						<FormInput
							label="Cantidad"
							name="cantidad"
							type="number"
							min={{ value: 1, message: 'Número invalido' }}
							max={{
								value: data.cantidad,
								message: `No hay suficiente inventario disponible. Hay: ${data.cantidad}.`,
							}}
						/>
					</div>
					<span className="flex justify-end">
						<Button type="submit">Agregar a la compra</Button>
					</span>
				</Form>
			</section>
			<section className="my-8 space-y-4 border-t pt-8">
				<h2 className="text-lg">Detalles de la venta</h2>
				<Table list={tableList} onRowSelect={test} withSelect ref={tableRef} />
			</section>
			<div className="space-y-5">
				<Button onClick={incrementStep} width="full">
					Ir a métodos de pago
				</Button>
				<Button
					width="full"
					variant="secondary"
					onClick={() => {
						setSelectedProducts(getCheckedRows());
						setIsModalOpen((prev) => !prev);
					}}
				>
					Modificar selección
				</Button>
				<Button onClick={decrementStep} variant="danger" width="full">
					Retroceder
				</Button>
			</div>
			<Dialog
				open={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 "
			>
				<Dialog.Panel className="w-5/6 max-w-lg space-y-5 rounded bg-white p-5">
					<Dialog.Title className="text-center text-lg sm:text-start">
						Modificar carro de compras
					</Dialog.Title>
					<div className="space-y-3">
						{selectedProducts.length > 0 ? (
							selectedProducts.map((product) => (
								<div key={product.producto.id} className="rounded border p-2">
									<p className="font-bold">{product.producto.nombre}</p>
									<p>{product.cantidad}</p>
									<div className="flex flex-wrap gap-2">
										<Button onClick={() => changeProductQuantity(product.producto, 1)}>
											Sumar
										</Button>
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
							<p className="rounded border p-5">No hay productos seleccionados.</p>
						)}
					</div>
					<Button onClick={() => setIsModalOpen((prev) => !prev)} variant="terciary" width="full">
						Cerrar
					</Button>
				</Dialog.Panel>
			</Dialog>
		</>
	);
};
