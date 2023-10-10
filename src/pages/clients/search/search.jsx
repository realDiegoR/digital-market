import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Autocomplete, BusinessInformation, Form } from '@/components';
import { PageTitle, Wrapper } from '@/common';
import { useFetch } from '@/hooks';
import { getClient } from '@/services/clients';

export const SearchClient = ({ fetchProfiles, profile }) => {
	const getProfiles = () => {
		if (profile) {
			const fakeBusinessId = 1;
			return fetchProfiles(fakeBusinessId);
		} else {
			return Promise.resolve([]);
		}
	};
	const { data } = useFetch({
		cacheId: profile ? profile.toLowerCase() : '',
		queryFunction: getProfiles,
		select: (profiles) => profiles.map((profileItem) => profileItem.perfil),
	});
	const handleSearch = (data) => {
		getClient(data.perfil);
		console.log(data);
	};
	return (
		<>
			<Helmet>
				<title>Buscar cliente</title>
			</Helmet>
			<PageTitle>Buscar cliente</PageTitle>
			<Wrapper className="space-y-14">
				<Form onSubmit={handleSearch}>
					{/* <FormInput label="Buscar" name="productId" /> */}
					<Autocomplete
						label={profile}
						name="perfil"
						placeholder={`Nombre de ${profile}`}
						data={data ?? []}
						filterFn={(query) => (profile) =>
							`${profile.nombre} ${profile.apellido} - ${profile.email}`
								.toLowerCase()
								.includes(query.toLowerCase())
						}
						displayValueFn={(profile) =>
							profile ? `${profile.nombre} ${profile.apellido} - ${profile.email}` : ''
						}
					/>
				</Form>
				{data && data.length > 0 ? <BusinessInformation data={data} /> : null}
			</Wrapper>
		</>
	);
};

SearchClient.propTypes = {
	fetchProfiles: PropTypes.func.isRequired,
	profile: PropTypes.string.isRequired,
};
