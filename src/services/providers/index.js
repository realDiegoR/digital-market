import { api } from '../api';

const endpoint = '/proveedores';

/**
 * Get an array of providers.
 * @param {number} negocioId - The ID of the negocio.
 * @returns {Promise<Array<Object>>} Array of provider objects.
 */
export const getProviders = async (negocioId) => {
	const response = await api.get(`${endpoint}/${negocioId}`);
	return response.data;
};

/**
 * Get a provider by negocioId and proveedorId.
 * @param {number} negocioId - The ID of the negocio.
 * @param {number} proveedorId - The ID of the provider.
 * @returns {Promise<Object>} The provider object.
 */
export const getProvider = async (negocioId, proveedorId) => {
	const response = await api.get(`${endpoint}/${negocioId}/${proveedorId}`);
	return response.data;
};

/**
 * Create a new provider.
 * @param {{negocioId: number, perfilId: number}} body - The ID of the negocio and the ID of the perfil.
 * @returns {Promise<Object>} The created provider object.
 */
export const createProvider = async (body) => {
	const response = await api.post(endpoint, body);
	return response.data;
};

/**
 * Delete a provider by negocioId and proveedorId.
 * @param {number} negocioId - The ID of the negocio.
 * @param {number} proveedorId - The ID of the provider.
 * @returns {Promise<Object>} The deleted provider object.
 */
export const deleteProvider = async (negocioId, proveedorId) => {
	const response = await api.delete(`${endpoint}/${negocioId}/${proveedorId}`);
	return response.data;
};
