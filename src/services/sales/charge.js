import { api } from '../api';

const endpoint = '/ventas';

/**
 * @param {{negocioId: number, ventaId: number, cuentaId: number, monto: number}} body Data to charge a pending balance
 */

export const addChargeToSale = async (body) => {
	const response = await api.post(`${endpoint}/add-cobro`, body);
	return response.data;
};

/**
 * @param {string | number} businessId Business ID
 * @param {string | number} saleId Sale ID
 * @param {string | number} chargeId Charge ID
 */

export const removeChargeFromSale = async (businessId, saleId, chargeId) => {
	const response = await api.delete(`${endpoint}/sub-cobro/${businessId}/${saleId}/${chargeId}`);
	return response.data;
};

/**
 * @param {{negocioId: number, ventaId: number, cuentaId: number, monto: number}} body Data to charge a pending balance
 */

export const addPendingChargeToSale = async (body) => {
	const response = await api.post(`${endpoint}/add-cobroPendiente`, body);
	return response.data;
};

/**
 * @param {string | number} businessId Business ID
 * @param {string | number} saleId Sale ID
 * @param {string | number} pendingChargeId Pending Charge ID
 */

export const removePendingChargeFromSale = async (businessId, saleId, pendingChargeId) => {
	const response = await api.delete(
		`${endpoint}/sub-cobroPendiente/${businessId}/${saleId}/${pendingChargeId}`
	);
	return response.data;
};

/**
 * @param {string | number} businessId Business ID
 * @param {string | number} saleId Sale ID
 */

export const finalizeSale = async (businessId, saleId) => {
	const response = await api.post(`${endpoint}/${businessId}/${saleId}`);
	return response.data;
};
