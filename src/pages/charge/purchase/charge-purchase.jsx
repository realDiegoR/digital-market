import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { PageTitle, Wrapper } from '@/common';
import { getProviders } from '@/services/providers';
import { InitialDataPage, LoadProductsPage } from '../components';

export const ChargePurchasePage = () => {
	const [currentStep, setCurrentStep] = useState(1);

	const incrementStep = () => {
		setCurrentStep((prev) => prev + 1);
	};

	const decrementStep = () => {
		setCurrentStep((prev) => prev - 1);
	};

	return (
		<>
			<Helmet>
				<title>Cargar Compra</title>
			</Helmet>
			<PageTitle>Cargar Compra</PageTitle>
			<Wrapper>
				{currentStep === 1 && (
					<InitialDataPage
						fetchProfiles={getProviders}
						profile="Proveedor"
						incrementStep={incrementStep}
					/>
				)}
				{currentStep === 2 && <LoadProductsPage decrementStep={decrementStep} />}
			</Wrapper>
		</>
	);
};
