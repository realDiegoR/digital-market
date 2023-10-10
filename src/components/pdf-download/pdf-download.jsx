import { PDFDownloadLink } from '@react-pdf/renderer';
import { IconFileDownload } from '@tabler/icons-react';
import PropTypes from 'prop-types';
import { Button } from '@/common';

export const PDFDownload = ({ doc, filename = 'file.pdf' }) => {
	return (
		<PDFDownloadLink document={doc} fileName={filename}>
			{({ loading }) => (
				<Button variant="terciary" disabled={loading}>
					<IconFileDownload />
					Descargar
				</Button>
			)}
		</PDFDownloadLink>
	);
};

PDFDownload.propTypes = {
	doc: PropTypes.any.isRequired,
	filename: PropTypes.string.isRequired,
};
