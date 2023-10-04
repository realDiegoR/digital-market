import { useState } from 'react';
import { Autocomplete, BusinessInformation, Form, FormInput, Modal } from '@/components';
import { Button, LoadingSpinner } from '@/common';
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

	const getBusinessProducts = () => {
		const fakeBusinessId = 1;
		return getAllProducts(fakeBusinessId);
	};

	const selectProductRow = (row) => {
		const checkedProducts = products.filter((product) => product.producto.nombre === row.producto);
		setSelectedProducts(checkedProducts);
	};

	const { data, status } = useFetch({
		cacheId: 'products',
		queryFunction: getBusinessProducts,
	});

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
				<Form onSubmit={addProduct} defaultValues={{ producto: '', cantidad: 1 }}>
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
			<div className="my-8 border-t pt-8">
				<BusinessInformation
					title="Detalles de la venta"
					onRowSelect={selectProductRow}
					data={tableList}
				/>
			</div>
			<div className="space-y-5">
				<Button onClick={incrementStep} width="full">
					Ir a métodos de pago
				</Button>
				<Button
					width="full"
					variant="secondary"
					onClick={() => {
						setIsModalOpen(true);
					}}
				>
					Modificar selección
				</Button>
				<Button onClick={decrementStep} variant="danger" width="full">
					Retroceder
				</Button>
			</div>
			<Modal
				title="Modificar carro de compras"
				open={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			>
				<div className="space-y-3">
					{selectedProducts.length > 0 ? (
						selectedProducts.map((product) => (
							<div key={product.producto.id} className="rounded border p-2">
								<p className="font-bold">{product.producto.nombre}</p>
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
						<p className="rounded border p-5">No hay productos seleccionados.</p>
					)}
				</div>
			</Modal>
		</>
	);
};
