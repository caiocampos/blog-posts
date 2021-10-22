import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API_URL
});

export const getMessageFromAxiosErrorSafe = (error: { response: { data: { message: string } } }): string => {
	return error?.response?.data?.message || '';
};
