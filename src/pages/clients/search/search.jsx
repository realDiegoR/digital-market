import { Helmet } from 'react-helmet';
import { BusinessInformation, Form, FormInput } from '@/components';
import { PageTitle, Wrapper } from '@/common';

export const SearchClient = () => {
	return (
		<>
			<Helmet>
				<title>Buscar cliente</title>
			</Helmet>
			<PageTitle>Buscar cliente</PageTitle>
			<Wrapper className="space-y-14">
				<Form>
					<FormInput label="Buscar" name="productId" />
				</Form>
				<BusinessInformation />
			</Wrapper>
		</>
	);
};
