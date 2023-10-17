import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { BusinessInformation } from '@/components';
import { variantStyles } from '@/components/form/variants';
import { LoadingSpinner, PageTitle, Wrapper } from '@/common';
import { useFetch } from '@/hooks';
import { getClients } from '@/services/clients';

export const SearchProvider = () => {
	const getBusinessProviders = () => {
		const fakeBusinessId = 1;
		return getClients(fakeBusinessId);
	};

	const { data, status } = useFetch({
		cacheId: 'proveedores',
		queryFunction: getBusinessProviders,
		select: (profiles) => profiles.map((profileItem) => profileItem.perfil),
	});

	const [filter, setFilter] = useState('');
	const [filteredProviders, setFilteredProviders] = useState(data);

	const handleFiltroChange = (e) => {
		const newValue = e.target.value;
		setFilter(newValue);

		const filteredProviders = data.filter((profileItem) =>
			profileItem.nombre.toLowerCase().includes(filter.toLowerCase())
		);

		setFilteredProviders(newValue ? filteredProviders : data);
	};

	return (
		<>
			<Helmet>
				<title>Buscar provedor</title>
			</Helmet>
			<PageTitle>Buscar provedor</PageTitle>
			<Wrapper className="space-y-14">
				<input
					className={variantStyles.box}
					type="text"
					placeholder="nombre del proveedor"
					onChange={handleFiltroChange}
					value={filter}
				/>
				{status === 'loading' ? (
					<LoadingSpinner />
				) : (
					<BusinessInformation data={filteredProviders || data} />
				)}
			</Wrapper>
		</>
	);
};
