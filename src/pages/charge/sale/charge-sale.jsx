import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { PageTitle, Wrapper } from '@/common';
import { useChargeStore } from '@/store';
import { getClients } from '@/services/clients';
import { InitialDataPage, LoadProductsPage } from '../components';

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
				{currentStep === 1 && <InitialDataPage fetchProfiles={getClients} profile="Cliente" />}
				{currentStep === 2 && <LoadProductsPage />}
			</Wrapper>
		</>
	);
};
