import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { BusinessInformation } from '@/components';
import { variantStyles } from '@/components/form/variants';
import { LoadingSpinner, PageTitle, Wrapper } from '@/common';
import { useFetch } from '@/hooks';
import { getClients } from '@/services/clients';

export const SearchClient = () => {
	const getBusinessClients = () => {
		const fakeBusinessId = 1;
		return getClients(fakeBusinessId);
	};

	const { data, status } = useFetch({
		cacheId: 'clientes',
		queryFunction: getBusinessClients,
		select: (profiles) => profiles.map((profileItem) => profileItem.perfil),
	});

	const [filter, setFilter] = useState('');
	const [filteredClients, setFilteredClients] = useState(data);

	const handleFiltroChange = (e) => {
		const newValue = e.target.value;
		setFilter(newValue);

		const filteredData = data.filter((profileItem) =>
			profileItem.nombre.toLowerCase().includes(filter.toLowerCase())
		);

		setFilteredClients(newValue ? filteredData : data);
	};

	return (
		<>
			<Helmet>
				<title>Buscar cliente</title>
			</Helmet>
			<PageTitle>Buscar cliente</PageTitle>
			<Wrapper className="space-y-14">
				<input
					className={variantStyles.box}
					type="text"
					placeholder="nombre del cliente"
					onChange={handleFiltroChange}
					value={filter}
				/>
				{status === 'loading' ? (
					<LoadingSpinner />
				) : (
					<BusinessInformation data={filteredClients || data} />
				)}
			</Wrapper>
		</>
	);
};
