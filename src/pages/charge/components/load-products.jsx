import PropTypes from 'prop-types';
import { useState } from 'react';
import { Autocomplete, BusinessInformation, Form, FormInput, Modal } from '@/components';
import { Button } from '@/common';
import { useBoundStore } from '@/stores';
import { useFetch, useSale } from '@/hooks/';
import { getAllProducts } from '@/services/products';

export const LoadProductsPage = ({ decrementStep }) => {
	const { products, addProduct, removeProduct, subject } = useBoundStore();
	const [selectedProducts, setSelectedProducts] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { addProductToSale, removeProductToSale } = useSale(subject);

	const getBusinessProducts = () => {
		const fakeBusinessId = 1;
		return getAllProducts(fakeBusinessId);
	};

	const selectProductRow = (row) => {
		const checkedProducts = products.filter((product) => product.nombre === row.producto);
		console.log(products, checkedProducts);
		setSelectedProducts(checkedProducts);
	};

	const { data } = useFetch({
		cacheId: 'products',
		queryFunction: getBusinessProducts,
	});

	const handleAddProduct = (data) => {
		addProductToSale.mutate({
			productoId: data.producto.id,
			cantidad: data.cantidad,
			valor: data.producto.valor,
		});
		addProduct(data);
	};

	const tableList = products.map((producto) => ({
		producto: producto.nombre,
		cantidad: producto.cantidad,
		precio: `$${producto.valor * producto.cantidad}`,
	}));

	return (
		<>
			<section className="space-y-4">
				<h2 className="mt-4 text-lg">Carga de productos</h2>
				<Form onSubmit={handleAddProduct} defaultValues={{ producto: '', cantidad: 1 }}>
					<div className="grid w-full grid-cols-[minmax(0,_3fr)_minmax(0,_1fr)] gap-5">
						<Autocomplete
							label="Producto"
							name="producto"
							data={data ?? []}
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
						/>
					</div>
					<span className="flex justify-end">
						<Button type="submit">Agregar a la compra</Button>
					</span>
				</Form>
			</section>
			<div className="my-8 border-t pt-8">
				<BusinessInformation
					title="Detalles del carro de compras"
					onRowSelect={selectProductRow}
					data={tableList}
				/>
			</div>
			<div className="space-y-5">
				<Button
					href={{ pathname: '/pasarela_de_pagos', state: { from: 'Cargar Venta' } }}
					disabled={products.length <= 0}
					width="full"
				>
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
							<div key={product.id} className="rounded border p-2">
								<p className="font-bold">{product.nombre}</p>
								<p>{product.cantidad}</p>
								<div className="flex flex-wrap gap-2">
									<Button
										onClick={() => {
											removeProductToSale.mutate(product.id);
											removeProduct(product.nombre);
											setSelectedProducts((prev) => prev.filter((p) => p !== product));
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

LoadProductsPage.propTypes = {
	decrementStep: PropTypes.func.isRequired,
};
