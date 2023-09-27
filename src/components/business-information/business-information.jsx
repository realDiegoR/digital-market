import { IconFileTypePdf } from '@tabler/icons-react';
import PropTypes from 'prop-types';
import { Button, Table } from '@/common';

export const BusinessInformation = ({ data }) => {
	return (
		<section>
			<div className="flex items-center justify-between pb-4">
				<h3 className="text-lg">Resultado</h3>
				<Button variant="terciary">
					<IconFileTypePdf stroke={1.5} />
					Descargar
				</Button>
			</div>
			<Table list={data} withSelect />
		</section>
	);
};

BusinessInformation.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
