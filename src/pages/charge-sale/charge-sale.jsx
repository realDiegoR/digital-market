import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { PageTitle, Wrapper } from '@/common';
import { useChargeStore } from '@/store';
import { InitialDataPage } from './initial-data';
import { LoadProductsPage } from './load-products';

export const ChargeSalePage = () => {
	const { currentStep, reset } = useChargeStore();

	useEffect(() => {
		return () => reset();
	}, [reset]);

	return (
		<>
			<Helmet>
				<title>Cargar Venta</title>
			</Helmet>
			<PageTitle>Cargar Venta</PageTitle>
			<Wrapper>
				{currentStep === 1 && <InitialDataPage />}
				{currentStep === 2 && <LoadProductsPage />}
			</Wrapper>
		</>
	);
};
