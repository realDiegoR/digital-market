import { api } from '../api';

/**
 * @param {string} id Profile ID
 */

export const getProfile = async (id) => {
	try {
		const response = await api.get(`/perfiles/${id}`);
		return response.data;
	} catch (err) {
		return err.response.data;
	}
};

/**
 * @param {{nombre: string, apellido: string, celular: string, direccion: string, email: string, imagen: null}} body Profile data
 */

export const postProfile = async (body) => {
	try {
		const response = await api.post('/perfiles/', body);
		return response.data;
	} catch (err) {
		return err.response.data;
	}
};

/**
 * @param {string} id Profile ID
 * @param {{nombre: string, apellido: string, celular: string, direccion: string, email: string, imagen: null}} body Profile data
 */

export const updateProfile = async (id, body) => {
	try {
		const response = await api.patch(`/perfiles/${id}`, body);
		return response.data;
	} catch (err) {
		return err.response.data;
	}
};

/**
 * @param {string} id Profile ID
 */

export const deleteProfile = async (id) => {
	try {
		const response = await api.delete(`/perfiles/${id}`);
		return response.data;
	} catch (err) {
		return err.response.data;
	}
};
