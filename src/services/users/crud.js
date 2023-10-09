import { api } from '../api';

const endpoint = '/usuarios';

/**
 * @param {string | number} businessId Business ID
 */

export const getAllUsers = async (businessId) => {
	const response = await api.get(`${endpoint}/${businessId}`);
	return response.data;
};

/**
 * @param {string | number} businessId Business ID
 * @param {string | number} userId User ID
 */

export const getUser = async (businessId, userId) => {
	const response = await api.get(`${endpoint}/${businessId}/${userId}`);
	return response.data;
};

/**
 * @param {{negocioId: number, username: string, perfilId: number, password: string}} body User data
 */

export const createUser = async (body) => {
	const response = await api.post(endpoint, body);
	return response.data;
};

/**
 * @param {string | number} businessId Business ID
 * @param {string | number} userId User ID
 * @param {{username: string,  password: string}} body User data
 */

export const updateUser = async (businessId, userId, body) => {
	const response = await api.patch(`${endpoint}/${businessId}/${userId}`, body);
	return response.data;
};

/**
 * @param {string | number} businessId Business ID
 * @param {string | number} userId User ID
 */

export const deleteUser = async (businessId, userId) => {
	const response = await api.delete(`${endpoint}/${businessId}/${userId}`);
	return response.data;
};
