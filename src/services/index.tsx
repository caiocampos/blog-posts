import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		UserAuthCode: process.env.REACT_APP_API_TOKEN || ''
	}
});
