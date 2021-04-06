import a from 'axios';

export const axios = a.create({
	baseURL: 'https://localhost:4000',
	timeout: 1000,
	headers: {},
});
