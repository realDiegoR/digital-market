import { Helmet } from 'react-helmet';
import { BusinessInformation, Form, FormInput } from '@/components';
import { PageTitle, Wrapper } from '@/common';

export const SearchAccount = () => {
	return (
		<>
			<Helmet>
				<title>Buscar cuenta</title>
			</Helmet>
			<PageTitle>Buscar cuenta</PageTitle>
			<Wrapper className="space-y-14">
				<Form>
					<FormInput label="Buscar" name="productId" />
				</Form>
				<BusinessInformation />
			</Wrapper>
		</>
	);
};
