import { api } from '../api';

const endpoint = '/usuarios';

/**
 * @param {{username: string,  password: string}} body User data
 */

export const loginUser = async (body) => {
	const response = await api.post(`${endpoint}/login`, body);
	return response.data;
};
