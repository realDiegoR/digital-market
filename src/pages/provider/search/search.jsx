import { Helmet } from 'react-helmet';
import { BusinessInformation, Form, FormInput } from '@/components';
import { PageTitle, Wrapper } from '@/common';

export const SearchProvider = () => {
	return (
		<>
			<Helmet>
				<title>Buscar provedor</title>
			</Helmet>
			<PageTitle>Buscar provedor</PageTitle>
			<Wrapper className="space-y-14">
				<Form>
					<FormInput label="Buscar" name="productId" />
				</Form>
				<BusinessInformation />
			</Wrapper>
		</>
	);
};
