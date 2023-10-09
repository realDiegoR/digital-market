import { api } from '../api';

const endpoint = '/categorias';

/**
 * Get an array of categories.
 * @param {number} negocioId - The ID of the negocio.
 * @returns {Promise<Array<Object>>} Array of categories.
 */
export const getCategories = async (negocioId) => {
	const response = await api.get(`${endpoint}/${negocioId}`);
	return response.data;
};

/**
 * Get a category by negocioId and categoriaId.
 * @param {number} negocioId - The ID of the negocio.
 * @param {number} categoriaId - The ID of the categoria.
 * @returns {Promise<Object>} The category object.
 */
export const getCategory = async (negocioId, categoriaId) => {
	const response = await api.get(`${endpoint}/${negocioId}/${categoriaId}`);
	return response.data;
};

/**
 * Create a new category.
 * @param {{negocioId: number, nombre: string}} body - The ID of the negocio and the name of the category.
 * @returns {Promise<Object>} The created category object.
 */
export const createCategory = async (body) => {
	const response = await api.post(endpoint, body);
	return response.data;
};

/**
 * Update a category by negocioId and categoriaId.
 * @param {number} negocioId - The ID of the negocio.
 * @param {number} categoriaId - The ID of the categoria.
 * @param {{nombre: string}} body - Object containing the updated name of the category.
 * @returns {Promise<Object>} The updated category object.
 */
export const updateCategory = async (negocioId, categoriaId, body) => {
	const response = await api.patch(`${endpoint}/${negocioId}/${categoriaId}`, body);
	return response.data;
};

/**
 * Delete a category by negocioId and categoriaId.
 * @param {number} negocioId - The ID of the negocio.
 * @param {number} categoriaId - The ID of the categoria.
 * @returns {Promise<Object>} The deleted category object.
 */
export const deleteCategory = async (negocioId, categoriaId) => {
	const response = await api.delete(`${endpoint}/${negocioId}/${categoriaId}`);
	return response.data;
};
