import { api } from '../api';

const endpoint = '/productos';

/**
 * @param {string | number} businessId Business ID
 */

export const getAllProducts = async (businessId) => {
	const response = await api.get(`${endpoint}/${businessId}`);
	return response.data;
};

/**
 * @param {string | number} businessId Business ID
 * @param {string | number} productId Product ID
 */

export const getProduct = async (businessId, productId) => {
	const response = await api.get(`${endpoint}/${businessId}/${productId}`);
	return response.data;
};

/**
 * @param {{categoriaId: number, negocioId: number, nombre: string, codigo: string, imagen?: string, descripcion: string, valor: number, cantidad: number, margen: number }} product Stock product
 */

export const createProduct = async (product) => {
	const response = await api.post(endpoint, product);
	return response.data;
};

/**
 * @param {string | number} businessId Business ID
 * @param {string | number} productId Product ID
 *  * @param {{nombre: string, imagen?: string, descripcion: string, valor: number, cantidad: number, margen: number }} product Stock product
 */

export const updateProduct = async (businessId, productId, product) => {
	const response = await api.patch(`${endpoint}/${businessId}/${productId}`, product);
	return response.data;
};

/**
 * @param {string | number} businessId Business ID
 * @param {string | number} productId Product ID
 */

export const deleteProduct = async (businessId, productId) => {
	const response = await api.delete(`${endpoint}/${businessId}/${productId}`);
	return response.data;
};
