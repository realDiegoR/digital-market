import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { PageTitle, Wrapper } from '@/common';
import { useFetch } from '@/hooks';
import { getClients } from '@/services/clients';
import { getAllProducts } from '@/services/products';
import { InitialDataPage, LoadProductsPage } from '../components';

export const ChargeSalePage = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const fakeBusinessId = 1;
	const { data: clients } = useFetch({
		cacheId: 'clients',
		queryFunction: () => getClients(fakeBusinessId),
		select: (profiles) => profiles.map((profile) => profile.perfil),
	});

	const { data: products } = useFetch({
		cacheId: 'products',
		queryFunction: () => getAllProducts(fakeBusinessId),
	});

	const incrementStep = () => {
		setCurrentStep((prev) => prev + 1);
	};

	const decrementStep = () => {
		setCurrentStep((prev) => prev - 1);
	};

	return (
		<>
			<Helmet>
				<title>Cargar Venta</title>
			</Helmet>
			<PageTitle>Cargar Venta</PageTitle>
			<Wrapper>
				{currentStep === 1 && (
					<InitialDataPage type="sale" data={clients} incrementStep={incrementStep} />
				)}
				{currentStep === 2 && (
					<LoadProductsPage products={products} decrementStep={decrementStep} />
				)}
			</Wrapper>
		</>
	);
};
