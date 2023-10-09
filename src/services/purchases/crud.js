import { api } from '../api';

const endpoint = '/compras';

/**
 * Get an array of purchases by negocioId.
 * @param {number} negocioId - The ID of the negocio.
 * @returns {Promise<Array<Object>>} Array of purchase objects.
 */
export const getPurchases = async (negocioId) => {
	const response = await api.get(`${endpoint}/${negocioId}`);
	return response.data;
};

/**
 * Get a purchase by negocioId and compraId.
 * @param {number} negocioId - The ID of the negocio.
 * @param {number} compraId - The ID of the purchase.
 * @returns {Promise<Object>} The purchase object.
 */
export const getPurchase = async (negocioId, compraId) => {
	const response = await api.get(`${endpoint}/${negocioId}/${compraId}`);
	return response.data;
};

/**
 * Create a new purchase.
 * @param {{negocioId: number, usuarioId: number, proveedorId: number}} body - The ID of the negocio, the usuario and the proveedor.
 * @returns {Promise<Object>} The created purchase object.
 */
export const createPurchase = async (body) => {
	const response = await api.post(endpoint, body);
	return response.data;
};

/**
 * Delete a purchase by negocioId and compraId.
 * @param {number} negocioId - The ID of the negocio.
 * @param {number} compraId - The ID of the purchase to delete.
 * @returns {Promise<Object>} The deleted purchase object.
 */
export const deletePurchase = async (negocioId, compraId) => {
	const response = await api.delete(`${endpoint}/${negocioId}/${compraId}`);
	return response.data;
};
