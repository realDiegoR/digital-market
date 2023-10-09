import { api } from '../api';

const endpoint = '/compras';

/**
 * Add a payment to a purchase.
 * @param {{
 *  negocioId: number,
 *  compraId: number,
 *  cuentaId: number,
 *  monto: number,
 * }} body - Required data to add a payment on a purchase
 * @returns {Promise<Object>} The purchase object with the added payment.
 */
export const addPaymentToPurchase = async (body) => {
	const response = await api.post(`${endpoint}/add-pago`, body);
	return response.data;
};

/**
 * Remove a payment from a purchase.
 * @param {number} negocioId - The ID of the negocio.
 * @param {number} compraId - The ID of the purchase.
 * @param {number} pagoId - The ID of the payment to remove.
 * @returns {Promise<Object>} The purchase object with the removed payment.
 */
export const removePaymentFromPurchase = async (negocioId, compraId, pagoId) => {
	const response = await api.delete(`${endpoint}/sub-pago/${negocioId}/${compraId}/${pagoId}`);
	return response.data;
};

/**
 * Add a pending payment to a purchase.
 * @param {{
 *  negocioId: number,
 *  compraId: number,
 *  cuentaId: number,
 *  monto: number,
 * }} body - Required data to add a payment on a purchase
 * @returns {Promise<Object>} The purchase object with the added pending payment.
 */
export const addPendingPaymentToPurchase = async (body) => {
	const response = await api.post(`${endpoint}/add-pagoPendiente`, body);
	return response.data;
};

/**
 * Remove a pending payment from a purchase.
 * @param {number} negocioId - The ID of the negocio.
 * @param {number} compraId - The ID of the purchase.
 * @param {number} pagoPendienteId - The ID of the pending payment to remove.
 * @returns {Promise<Object>} The purchase object with the removed pending payment.
 */
export const removePendingPaymentFromPurchase = async (negocioId, compraId, pagoPendienteId) => {
	const response = await api.delete(
		`${endpoint}/sub-pagoPendiente/${negocioId}/${compraId}/${pagoPendienteId}`
	);
	return response.data;

};
