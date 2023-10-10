// eslint-disable-next-line import/named
import { Document, Font, Image, Link, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import PropTypes from 'prop-types';
import rubikbold from '@/assets/fonts/Rubik/Rubik-Bold.ttf';
import rubikregular from '@/assets/fonts/Rubik/Rubik-Regular.ttf';
import footlogo from '@/assets/images/dmdevlogo.png';

Font.register({ family: 'Rubik-Regular', format: 'truetype', src: rubikregular });
Font.register({ family: 'Rubik-Bold', format: 'truetype', src: rubikbold });

const styles = StyleSheet.create({
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

export const Billpdf = ({
	imgUrl,
	clientName,
	clientAddress,
	date,
	cart,
	paymentMethod,
	alias,
	cvu,
	subtotal,
	total,
}) => {
	return (
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.headerp} fixed>
					<Image src="/dmhead.png"> </Image>
					<View style={styles.logodiv}>
						<Image src={imgUrl} style={styles.logo}></Image>
					</View>
				</View>
				<View style={styles.section}>
					<Text style={styles.title}>Datos del cliente</Text>
					<Text>Nombre: {clientName}</Text>
					<Text>Direccion: {clientAddress}</Text>
					<Text>Fecha: {date}</Text>
					<Tablepdf cart={cart} />
					<View style={styles.totalview}>
						<Text style={styles.subtotal}>Subtotal: {subtotal}</Text>
						<Text style={styles.total}>Total: {total}</Text>
					</View>
					<Text>Foma de Pago: {paymentMethod}</Text>
					<Text>Alias: {alias}</Text>
					<Text>CVU: {cvu}</Text>
				</View>
				<View style={styles.footer} fixed>
					<LinkReference
						name="E-mail:   "
						textlink="destored0@gmail.com"
						link="destored0@gmail.com"
					/>
					<LinkReference
						name="Facebook:   "
						textlink="destored0"
						link="https://www.facebook.com/destored0"
					/>
					<LinkReference
						name="Instagram:   "
						textlink="destored22"
						link="https://www.instagram.com/destored22/#"
					/>
					<Image src={footlogo} style={styles.logofoot}></Image>
					<Image src="/dmfoot.png" style={styles.footerimage} />
				</View>
			</Page>
		</Document>
	);
};

Billpdf.propTypes = {
	imgUrl: PropTypes.string.isRequired,
	clientName: PropTypes.string.isRequired,
	clientAddress: PropTypes.string,
	date: PropTypes.string,
	cart: PropTypes.any,
	paymentMethod: PropTypes.string.isRequired,
	alias: PropTypes.string,
	cvu: PropTypes.string,
	total: PropTypes.any,
	subtotal: PropTypes.any,
};

const Tablepdf = ({ cart }) => {
	return (
		<View style={styles.pdftable}>
			<View style={styles.pdfrow}>
				<View style={styles.detailcellconcept}>
					<Text>Concepto</Text>
				</View>
				<View style={styles.detailcell}>
					<Text>Unidades</Text>
				</View>
				<View style={styles.detailcell}>
					<Text>Precio</Text>
				</View>
			</View>
			{cart.map((objeto, key) => (
				<Rowpdf key={key} detail={objeto.product} units={objeto.units} price={objeto.price} />
			))}
		</View>
	);
};

Tablepdf.propTypes = {
	cart: PropTypes.any,
	subtotal: PropTypes.any,
	total: PropTypes.any,
};

const LinkReference = ({ name, textlink, link }) => {
	return (
		<View style={styles.refereenceview}>
			<Text style={styles.namereference}>{name}</Text>
			<Link src={link}>{textlink}</Link>
		</View>
	);
};

LinkReference.propTypes = {
	name: PropTypes.string,
	textlink: PropTypes.string,
	link: PropTypes.string,
};

const Rowpdf = ({ detail, units, price }) => {
	return (
		<View style={styles.pdfrow}>
			<View style={styles.rowcellconcept}>
				<Text>{detail}</Text>
			</View>
			<View style={styles.rowcell}>
				<Text>{units}</Text>
			</View>
			<View style={styles.rowcell}>
				<Text>{price}</Text>
			</View>
		</View>
	);
};

Rowpdf.propTypes = {
	detail: PropTypes.string,
	units: PropTypes.any,
	price: PropTypes.any,
};
