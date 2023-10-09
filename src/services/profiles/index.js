import { api } from '../api';

/**
 * @param {string} id Profile ID
 */

export const getProfile = async (id) => {
	const response = await api.get(`/perfiles/${id}`);
	return response.data;
};

/**
 * @param {{nombre: string, apellido: string, celular: string, direccion: string, email: string, imagen: null}} body Profile data
 */

export const postProfile = async (body) => {
	const response = await api.post('/perfiles/', body);
	return response.data;
};

/**
 * @param {string} id Profile ID
 * @param {{nombre: string, apellido: string, celular: string, direccion: string, email: string, imagen: null}} body Profile data
 */

export const updateProfile = async (id, body) => {
	const response = await api.patch(`/perfiles/${id}`, body);
	return response.data;

};

/**
 * @param {string} id Profile ID
 */

export const deleteProfile = async (id) => {
	const response = await api.delete(`/perfiles/${id}`);
	return response.data;
};
