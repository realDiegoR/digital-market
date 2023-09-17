import { api } from '../api';

const endpoint = '/compras';

/**
 * Add an item to a purchase.
 * @param {{
 *  negocioId: number,
 *  compraId: number,
 *  productoId: number,
 *  cantidad: number,
 *  valor: number,
 * }} body - Required data to add an item
 * @returns {Promise<Object>} The purchase object with the added item.
 */
export const addItemToPurchase = async (body) => {
	try {
		const response = await api.post(`${endpoint}/add-item`, body);
		return response.data;
	} catch (err) {
		return err.response.data;
	}
};

/**
 * Remove an item from a purchase.
 * @param {number} negocioId - The ID of the negocio.
 * @param {number} compraId - The ID of the purchase.
 * @param {number} productoId - The ID of the product to remove.
 * @returns {Promise<Object>} The purchase object with the removed item.
 */
export const removeItemFromPurchase = async (negocioId, compraId, productoId) => {
	try {
		const response = await api.delete(
			`${endpoint}/sub-item/${negocioId}/${compraId}/${productoId}`
		);
		return response.data;
	} catch (err) {
		return err.response.data;
	}
};

/**
 * Finalize a purchase by negocioId and compraId.
 * @param {number} negocioId - The ID of the negocio.
 * @param {number} compraId - The ID of the purchase.
 * @returns {Promise<Object>} The finalized purchase object.
 */
export const finalizePurchase = async (negocioId, compraId) => {
	try {
		const response = await api.post(`${endpoint}/${negocioId}/${compraId}`);
		return response.data;
	} catch (err) {
		return err.response.data;
	}
};
