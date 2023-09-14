import { api } from '../api';

const endpoint = '/ventas';

/**
 * @param {{negocioId: number, ventaId: number, productoId: number, cantidad: number, valor: number}} body Data to add a product into a cart
 */

export const addProductToCart = async (body) => {
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

export const removeProductFromCart = async (businessId, saleId, productId) => {
	try {
		const response = await api.delete(`${endpoint}/sub-item/${businessId}/${saleId}/${productId}`);
		return response.data;
	} catch (err) {
		return err.response.data;
	}
};

/**
 * @param {{negocioId: number, ventaId: number, cuentaId: number, monto: number}} body Data to charge a pending balance
 */

export const addCharge = async (body) => {
	try {
		const response = await api.post(`${endpoint}/add-cobro`, body);
		return response.data;
	} catch (err) {
		return err.response.data;
	}
};

/**
 * @param {string | number} businessId Business ID
 * @param {string | number} saleId Sale ID
 * @param {string | number} chargeId Charge ID
 */

export const removeCharge = async (businessId, saleId, chargeId) => {
	try {
		const response = await api.delete(`${endpoint}/sub-cobro/${businessId}/${saleId}/${chargeId}`);
		return response.data;
	} catch (err) {
		return err.response.data;
	}
};

/**
 * @param {{negocioId: number, ventaId: number, cuentaId: number, monto: number}} body Data to charge a pending balance
 */

export const addPendingCharge = async (body) => {
	try {
		const response = await api.post(`${endpoint}/add-cobroPendiente`, body);
		return response.data;
	} catch (err) {
		return err.response.data;
	}
};

/**
 * @param {string | number} businessId Business ID
 * @param {string | number} saleId Sale ID
 * @param {string | number} pendingChargeId Pending Charge ID
 */

export const removePendingCharge = async (businessId, saleId, pendingChargeId) => {
	try {
		const response = await api.delete(
			`${endpoint}/sub-cobroPendiente/${businessId}/${saleId}/${pendingChargeId}`
		);
		return response.data;
	} catch (err) {
		return err.response.data;
	}
};

/**
 * @param {string | number} businessId Business ID
 * @param {string | number} saleId Sale ID
 */

export const finalizeSale = async (businessId, saleId) => {
	try {
		const response = await api.post(`${endpoint}/${businessId}/${saleId}`);
		return response.data;
	} catch (err) {
		return err.response.data;
	}
};
