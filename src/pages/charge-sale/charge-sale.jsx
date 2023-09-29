import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { PageTitle, Wrapper } from '@/common';
import { useChargeStore } from '@/store';
import { StepOnePage } from './step-1';
import { StepTwoPage } from './step-2';

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
				{currentStep === 1 && <StepOnePage />}
				{currentStep === 2 && <StepTwoPage />}
			</Wrapper>
		</>
	);
};
