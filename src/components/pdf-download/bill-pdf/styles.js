import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
	page: { paddingBottom: 200, paddingTop: 210 },
	section: {
		fontFamily: 'Rubik-Regular',
		display: 'flex',
		margin: 10,
		padding: 10,
		flexGrow: 1,
	},
	title: {
		fontFamily: 'Rubik-Bold',
		fontSize: 28,
	},
	logo: {
		height: '40px',
		width: '70px',
	},
	logodiv: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'black',
		height: '150px',
		width: '150px',
		borderRadius: '20px',
		borderWidth: '3px',
		borderColor: '#03FA6E',
		position: 'relative',
		left: '400px',
		bottom: '115px',
	},
	headerp: { position: 'absolute', top: 0, left: 0, right: 0 },
	footer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: -2,
	},
	footerimage: { zIndex: -1 },
	logofoot: {
		position: 'relative',
		height: '92px',
		width: '70px',
		left: '25px',
		top: '65px',
	},
	pdftable: {
		width: '550px',
	},
	pdfrow: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		width: '550px',
		borderBottom: '1px',
	},
	detailcellconcept: {
		maxHeight: '25px',
		width: '250px',
		textAlign: 'center',
		backgroundColor: '#011108eb',
		color: 'white',
		borderRadius: '4px',
	},
	detailcell: {
		maxHeight: '200px',
		width: '150px',
		textAlign: 'center',
		color: '#ffffff',
		backgroundColor: '#011108eb',
		borderRadius: '4px',
	},
	rowcellconcept: {
		maxHeight: '100px',
		width: '250px',
	},
	rowcell: {
		maxHeight: '200px',
		width: '150px',
		textAlign: 'center',
	},
	namereference: {
		textDecoration: 'underline',
	},
	refereenceview: {
		display: 'flex',
		flexDirection: 'row',
		position: 'relative',
		left: 120,
		top: 150,
	},
	total: {
		fontFamily: 'Rubik-Bold',
	},
	subtotal: {
		fontFamily: 'Rubik-Regular',
	},
	totalview: {
		alignSelf: 'flex-end',
	},
});
