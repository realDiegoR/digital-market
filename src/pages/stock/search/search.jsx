import { Helmet } from 'react-helmet';
import { BusinessInformation, Form, FormInput } from '@/components';
import { Button, LoadingSpinner, PageTitle, Wrapper } from '@/common/';
import { useFetch } from '@/hooks';
import { getAllProducts } from '@/services/products';

export const SearchStockPage = () => {
	const getBusinessProducts = async () => {
		const fakeBusinessId = 1;
		const res = await getAllProducts(fakeBusinessId);
		return res;
	};

	const { data, status } = useFetch({ cacheId: 'stock', queryFunction: getBusinessProducts });

	if (status === 'loading') {
		return <LoadingSpinner />;
	}

	return (
		<>
			<Helmet>
				<title>Buscar producto</title>
			</Helmet>
			<PageTitle>Buscar producto</PageTitle>
			<Wrapper className="space-y-14">
				<Form>
					<FormInput label="Filtrar por código" name="productId" />
					<div className="flex justify-end">
						<Button>Filtrar</Button>
					</div>
				</Form>
				<BusinessInformation data={data} />
			</Wrapper>
		</>
	);
};
