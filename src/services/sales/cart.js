import { api } from '../api';

const endpoint = '/ventas';

/**
 * @param {{negocioId: number, ventaId: number, productoId: number, cantidad: number, valor: number}} body Data to add a product into a cart
 */

export const addItemToSale = async (body) => {
	try {
		const response = await api.post(`${endpoint}/add-item`, body);
		return response.data;
	} catch (err) {
		return err.response.data;
	}
};

/**
 * @param {string | number} businessId Business ID
 * @param {string | number} saleId Sale ID
 * @param {string | number} productId Product ID
 */

export const removeItemFromSale = async (businessId, saleId, productId) => {
	try {
		const response = await api.delete(`${endpoint}/sub-item/${businessId}/${saleId}/${productId}`);
		return response.data;
	} catch (err) {
		return err.response.data;
	}
};
