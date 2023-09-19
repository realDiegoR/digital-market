import { IconFileTypePdf } from '@tabler/icons-react';
import PropTypes from 'prop-types';
import { Button, LoadingSpinner, Table } from '@/common';
import { useFetch } from '@/hooks/';

export const BusinessInformation = ({ queryKey, queryFn }) => {
	const { data, status } = useFetch(queryKey, queryFn);

	const isLoading = status === 'loading';

	return (
		<section>
			<div className="flex items-center justify-between pb-4">
				<h3 className="text-lg">Resultado</h3>
				<Button variant="terciary">
					<IconFileTypePdf stroke={1.5} />
					Descargar
				</Button>
			</div>
			{isLoading ? <LoadingSpinner /> : <Table list={data} withSelect />}
		</section>
	);
};

BusinessInformation.propTypes = {
	queryKey: PropTypes.arrayOf(PropTypes.string).isRequired,
	queryFn: PropTypes.func.isRequired,
};
