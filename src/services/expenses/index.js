import { api } from '../api';

// Import the axios instance created in '../api'.

const endpoint = '/expenses'; // Define the endpoint for Expenses.

/**
 * Get an array of expenses by negocioId.
 * @param {number} negocioId - The ID of the negocio.
 * @returns {Promise<Array<Object>>} Array of expense objects.
 */
export const getExpenses = async (negocioId) => {
	const response = await api.get(`${endpoint}/${negocioId}`);
	return response.data;
};

/**
 * Get an expense by negocioId and expenseId.
 * @param {number} negocioId - The ID of the negocio.
 * @param {number} expenseId - The ID of the expense.
 * @returns {Promise<Object>} The expense object.
 */
export const getExpense = async (negocioId, expenseId) => {
	const response = await api.get(`${endpoint}/${negocioId}/${expenseId}`);
	return response.data;
};

/**
 * Create a new expense.
 * @param {{
 * negocioId: number,
 * usuarioId: number,
 * cuentaEmisorId: number,
 * cuentaReceptorId: number,
 * monto: number,
 * }} body - Required data for creating a business expense.
 * @returns {Promise<Object>} The created expense object.
 */
export const createExpense = async (body) => {
	const response = await api.post(endpoint, body);
	return response.data;
};

/**
 * Delete an expense by negocioId and expenseId.
 * @param {number} negocioId - The ID of the negocio.
 * @param {number} expenseId - The ID of the expense to delete.
 * @returns {Promise<Object>} The deleted expense object.
 */
export const deleteExpense = async (negocioId, expenseId) => {
	const response = await api.delete(`${endpoint}/${negocioId}/${expenseId}`);
	return response.data;
};
