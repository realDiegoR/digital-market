import { api } from '../api';

const endpoint = '/clientes';

/**
 * Get an array of clients by negocioId.
 * @param {number} negocioId - The ID of the negocio.
 * @returns {Promise<Array<Object>>} Array of client objects.
 */
export const getClients = async (negocioId) => {
	const response = await api.get(`${endpoint}/${negocioId}`);
	return response.data;
};

/**
 * Get a client by negocioId and clienteId.
 * @param {number} negocioId - The ID of the negocio.
 * @param {number} clienteId - The ID of the client.
 * @returns {Promise<Object>} The client object.
 */
export const getClient = async (negocioId, clienteId) => {
	const response = await api.get(`${endpoint}/${negocioId}/${clienteId}`);
	return response.data;
};

/**
 * Create a new client.
 * @param {{negocioId: number, perfilId: number}} body - The ID of the negocio and the ID of the perfil.
 * @returns {Promise<Object>} The created client object.
 */
export const createClient = async (body) => {
	const response = await api.post(endpoint, body);
	return response.data;
};

/**
 * Delete a client by negocioId and clienteId.
 * @param {number} negocioId - The ID of the negocio.
 * @param {number} clienteId - The ID of the client.
 * @returns {Promise<Object>} The deleted client object.
 */
export const deleteClient = async (negocioId, clienteId) => {
	const response = await api.delete(`${endpoint}/${negocioId}/${clienteId}`);
	return response.data;
};
