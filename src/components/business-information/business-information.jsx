import { IconFileTypePdf } from '@tabler/icons-react';
import PropTypes from 'prop-types';
import { Button, Table } from '@/common';

export const BusinessInformation = ({
	data,
	onRowSelect = () => undefined,
	download = false,
	title = 'Resultado',
}) => {
	return (
		<section>
			<div className="flex items-center justify-between pb-4">
				<h2 className="text-lg">{title}</h2>
				{download ? (
					<Button variant="terciary">
						<IconFileTypePdf stroke={1.5} />
						Descargar
					</Button>
				) : null}
			</div>
			<Table list={data} withSelect onRowSelect={onRowSelect} />
		</section>
	);
};

BusinessInformation.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	title: PropTypes.string,
	onRowSelect: PropTypes.func,
	download: PropTypes.bool,
};
