import axios from 'axios';

const API_BASE_URL = import.meta.env.API_BASE_URL;
const API_VERSION = import.meta.env.API_VERSION;

export const api = axios.create({
	baseURL: `${API_BASE_URL}/${API_VERSION}`,
	timeout: 2500,
});
