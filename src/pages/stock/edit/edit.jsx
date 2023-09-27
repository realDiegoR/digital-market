import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Form, FormInput } from '@/components';
import { Button, LoadingSpinner, PageTitle, Wrapper } from '@/common/';
import { useFetch } from '@/hooks';
import { getProduct } from '@/services/products';

export const EditStockPage = () => {
	const [product, setProduct] = useState('');

	const handleSearchProduct = (data) => {
		setProduct(data.productId);
	};

	const getBusinessProduct = () => {
		const fakeBusinessId = 1;
		return getProduct(fakeBusinessId, product);
	};

	const { data, status, fetchStatus } = useFetch({
		cacheId: `products-${product}`,
		queryFunction: getBusinessProduct,
		triggerValue: product,
	});

	return (
		<>
			<Helmet>
				<title>Modificar producto</title>
			</Helmet>
			<PageTitle>Modificar producto</PageTitle>
			<Wrapper>
				<Form onSubmit={handleSearchProduct} defaultValues={{ productId: '' }}>
					<FormInput label="Buscar por código" name="productId" type="number" />
					<div className="flex justify-end">
						<Button type="submit" variant="secondary">
							Buscar
						</Button>
					</div>
				</Form>
				{fetchStatus === 'fetching' ? <LoadingSpinner /> : null}
				{status === 'success' ? (
					<Form
						defaultValues={{
							nombre: data.nombre,
							descripcion: data.descripcion,
							cantidad: data.cantidad,
							precio: data.valor,
							margen: data.margen,
						}}
					>
						<FormInput label="Nombre" name="nombre" />
						<FormInput label="Descripción" name="descripcion" />
						<FormInput label="Cantidad" name="cantidad" />
						<FormInput label="Precio" name="precio" />
						<FormInput label="Margen de Venta" name="margen" />
					</Form>
				) : null}
			</Wrapper>
		</>
	);
};
