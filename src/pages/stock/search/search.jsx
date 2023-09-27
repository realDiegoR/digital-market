import { BusinessInformation, Form, FormInput } from '@/components';
import { LoadingSpinner, PageTitle, Wrapper } from '@/common/';
import { useFetch } from '@/hooks';
import { getAllProducts } from '@/services/products';

export const SearchStockPage = () => {
	const getBusinessProducts = async () => {
		const fakeBusinessId = 1;
		const res = await getAllProducts(fakeBusinessId);
		return res;
	};

	const { data, status } = useFetch(['inventario'], getBusinessProducts);

	if (status === 'loading') {
		return <LoadingSpinner />;
	}

	return (
		<>
			<PageTitle>Buscar producto</PageTitle>
			<Wrapper className="space-y-14">
				<Form>
					<FormInput label="Buscar" name="productId" />
				</Form>
				<BusinessInformation data={data} />
			</Wrapper>
		</>
	);
};
