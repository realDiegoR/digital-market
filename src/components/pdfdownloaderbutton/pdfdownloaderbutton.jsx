import { PDFDownloadLink } from '@react-pdf/renderer';
import { IconFileDownload } from '@tabler/icons-react';
import PropTypes from 'prop-types';
import { Button } from '@/common';

export const Billdownloader = ({ doc }) => {
	return (
		<PDFDownloadLink document={doc} fileName="pruebapdf">
			{({ loading }) =>
				loading ? (
					<Button variant="terciary">Cargando...</Button>
				) : (
					<Button variant="terciary">
						<IconFileDownload />
						Descargar
					</Button>
				)
			}
		</PDFDownloadLink>
	);
};

Billdownloader.propTypes = {
	doc: PropTypes.any.isRequired,
};
