import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { BusinessInformation } from '@/components';
import { variantStyles } from '@/components/form/variants';
import { LoadingSpinner, PageTitle, Wrapper } from '@/common';
import { useFetch } from '@/hooks';
import { getClients } from '@/services/clients';

export const SearchProvider = () => {
	const profile = 'proveedor';
	const getProfiles = () => {
		const fakeBusinessId = 1;
		return getClients(fakeBusinessId);
	};
	const { data, status } = useFetch({
		cacheId: profile.toLowerCase(),
		queryFunction: getProfiles,
		select: (profiles) => profiles.map((profileItem) => profileItem.perfil),
	});

	const [filtro, setFiltro] = useState('');
	const [filteredData, setFilteredData] = useState(data);

	const handleFiltroChange = (e) => {
		const newValue = e.target.value;
		setFiltro(newValue);
		const filteredData = data.filter((profileItem) =>
			profileItem.nombre.toLowerCase().includes(filtro.toLowerCase())
		);
		return filteredData;
	};

	useEffect(() => {
		if (data) {
			const filteredData = data.filter((profileItem) =>
				profileItem.nombre.toLowerCase().includes(filtro.toLowerCase())
			);
			setFilteredData(filteredData);
		}
	}, [filtro, data]);

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
					onChange={handleFiltroChange}
					value={filtro}
				/>
				{status === 'loading' ? <LoadingSpinner /> : <BusinessInformation data={filteredData} />}
				<BusinessInformation />
			</Wrapper>
		</>
	);
};
