import { api } from '../api';

const endpoint = '/negocios';

export const getAllBusinesses = async () => {
	try {
		const response = await api.get(endpoint);
		return response.data;
	} catch (err) {
		return err.response.data;
	}
};

/**
 * @param {string} id Business ID
 */

export const getBusiness = async (id) => {
	try {
		const response = await api.get(`${endpoint}/${id}`);
		return response.data;
	} catch (err) {
		return err.response.data;
	}
};

/**
 * @param {string} id Business ID
 * @param {{nombre: string, celular: string, direccion: string}} body Business data
 */

export const createBusiness = async (body) => {
	try {
		const response = await api.post(endpoint, body);
		return response.data;
	} catch (err) {
		return err.response.data;
	}
};

/**
 * @param {string} id Business ID
 * @param {{nombre: string, celular: string, direccion: string}} body Business data
 */

export const updateBusiness = async (id, body) => {
	try {
		const response = await api.patch(`${endpoint}/${id}`, body);
		return response.data;
	} catch (err) {
		return err.response.data;
	}
};

/**
 * @param {string} id Business ID
 */

export const deleteBusiness = async (id) => {
	try {
		const response = await api.delete(`${endpoint}/${id}`);
		return response.data;
	} catch (err) {
		return err.response.data;
	}
};
