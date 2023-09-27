import { BusinessInformation } from '@/components/';
import { Button, LoadingSpinner, PageTitle, Wrapper } from '@/common/';
import { useFetch } from '@/hooks/';
import { getPurchases } from '@/services/purchases';

export const PurchasesPage = () => {
	const getBusinessPurchases = () => {
		const fakeBusinessId = 1;
		return getPurchases(fakeBusinessId);
	};

	const { data, status } = useFetch({ cacheId: 'purchases', queryFunction: getBusinessPurchases });

	if (status === 'loading') {
		return <LoadingSpinner />;
	}

	return (
		<>
			<PageTitle>Lista de Compras</PageTitle>
			<Wrapper>
				<div className="my-14">
					<BusinessInformation data={data} />
				</div>
				<section className="space-y-5">
					<Button width="full">Ver detalles de selección</Button>
					<Button width="full" variant="secondary">
						Modificar selección
					</Button>
					<Button width="full" variant="danger">
						Eliminar selección
					</Button>
				</section>
			</Wrapper>
		</>
	);
};
