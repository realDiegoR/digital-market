import { BusinessInformation } from '@/components/';
import { PageTitle, Wrapper } from '@/common/';
import { getAllSales } from '@/services/sales';

export const SalesPage = () => {
	const getBusinessSales = () => {
		const fakeBusinessId = 1;
		getAllSales(fakeBusinessId);
	};

	return (
		<>
			<PageTitle>Lista de Ventas</PageTitle>
			<Wrapper>
				<div className="my-14">
					<BusinessInformation queryKey={['sales']} queryFn={getBusinessSales} />
				</div>
			</Wrapper>
		</>
	);
};
