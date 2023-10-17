import { api } from '../api';

// Import the axios instance created in '../api'.

const endpoint = '/accounts'; // Define the endpoint for Accounts.

/**
 * Get an array of accounts by negocioId.
 * @param {number} negocioId - The ID of the negocio.
 * @returns {Promise<Array<Object>>} Array of account objects.
 */
export const getAccounts = async (negocioId) => {
	const response = await api.get(`${endpoint}/${negocioId}`);
	return response.data;
};

/**
 * Get an account by negocioId and accountId.
 * @param {number} negocioId - The ID of the negocio.
 * @param {number} accountId - The ID of the account.
 * @returns {Promise<Object>} The account object.
 */
export const getAccount = async (negocioId, accountId) => {
	const response = await api.get(`${endpoint}/${negocioId}/${accountId}`);
	return response.data;
};

/**
 * Create a new account.
 * @param {{
 * negocioId: number,
 * nombre: string,
 * codigo: string,
 * }} body - Required data for creating an account in a business.
 * @returns {Promise<Object>} The created account object.
 */
export const createAccount = async (body) => {
	const response = await api.post(endpoint, body);
	return response.data;
};

/**
 * Update an account by negocioId and accountId.
 * @param {number} negocioId - The ID of the negocio.
 * @param {number} accountId - The ID of the account.
 * @param {{nombre: string, debe: number, haber: number}} accountData - The data to update the account (e.g., nombre, debe, haber).
 * @returns {Promise<Object>} The updated account object.
 */
export const updateAccount = async (negocioId, accountId, accountData) => {
	const response = await api.patch(`${endpoint}/${negocioId}/${accountId}`, accountData);
	return response.data;
};

/**
 * Delete an account by negocioId and accountId.
 * @param {number} negocioId - The ID of the negocio.
 * @param {number} accountId - The ID of the account to delete.
 * @returns {Promise<Object>} The deleted account object.
 */
export const deleteAccount = async (negocioId, accountId) => {
	const response = await api.delete(`${endpoint}/${negocioId}/${accountId}`);
	return response.data;
};
