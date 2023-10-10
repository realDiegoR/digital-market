import { Helmet } from 'react-helmet';
import { BusinessInformation, Form, FormInput } from '@/components';
import { LoadingSpinner, PageTitle, Wrapper } from '@/common';
import { useFetch } from '@/hooks';
import { getClient, getClients } from '@/services/clients';

export const SearchClient = () => {
	const profile = 'cliente';
	const getProfiles = () => {
		const fakeBusinessId = 1;
		return getClients(fakeBusinessId);
	};

	const { data, status } = useFetch({
		cacheId: profile.toLowerCase(),
		queryFunction: getProfiles,
		select: (profiles) => profiles.map((profileItem) => profileItem.perfil),
	});

	const handleSearch = () => {
		getClient(data.perfil);
		console.log(data);
		// data.filter((item) => item.name.toLowerCase().includes(data.target.value.toLowerCase()));
	};
	return (
		<>
			<Helmet>
				<title>Buscar cliente</title>
			</Helmet>
			<PageTitle>Buscar cliente</PageTitle>
			<Wrapper className="space-y-14">
				<Form onSubmit={handleSearch} defaultValues={{ perfil: '' }}>
					<FormInput label="Buscar" name="perfil" />
				</Form>
				{status === 'loading' ? <LoadingSpinner /> : <BusinessInformation data={data} />}
			</Wrapper>
		</>
	);
};
