import { api } from '../api';

const endpoint = '/ventas';

/**
 * @param {string | number} businessId Business ID
 */

export const getAllSales = async (businessId) => {
	const response = await api.get(`${endpoint}/${businessId}`);
	return response.data;
};

/**
 * @param {string | number} businessId Business ID
 * @param {string | number} saleId Sale ID
 */

export const getSale = async (businessId, saleId) => {
	const response = await api.get(`${endpoint}/${businessId}/${saleId}`);
	return response.data;
};

/**
 * @param {{negocioId: number, userId: number, clienteId: number}} sale Entities related to the sale
 */

export const createSale = async (sale) => {
	const response = await api.post(endpoint, sale);
	return response.data;
};

/**
 * @param {string | number} businessId Business ID
 * @param {string | number} saleId Sale ID
 */

export const deleteSale = async (businessId, saleId) => {
	const response = await api.delete(`${endpoint}/${businessId}/${saleId}`);
	return response.data;
};
