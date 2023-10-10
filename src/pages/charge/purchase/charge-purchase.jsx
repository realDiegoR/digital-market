import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { PageTitle, Wrapper } from '@/common';
import { useChargeStore } from '@/store';
import { getProviders } from '@/services/providers';
import { InitialDataPage, LoadProductsPage } from '../components';

export const ChargePurchasePage = () => {
	const { currentStep, reset } = useChargeStore();

	useEffect(() => {
		return () => reset();
	}, [reset]);

	return (
		<>
			<Helmet>
				<title>Cargar Compra</title>
			</Helmet>
			<PageTitle>Cargar Compra</PageTitle>
			<Wrapper>
				{currentStep === 1 && <InitialDataPage fetchProfiles={getProviders} profile="Proveedor" />}
				{currentStep === 2 && <LoadProductsPage />}
			</Wrapper>
		</>
	);
};
