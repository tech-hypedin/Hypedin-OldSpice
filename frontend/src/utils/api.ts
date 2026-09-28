import axios from 'axios';
import { getCookie } from 'cookies-next';

const isServer = typeof window === 'undefined';

const api = axios.create({
    // baseURL: isServer ? process.env.INTERNAL_API_URL : process.env.NEXT_PUBLIC_API_URL,
    baseURL: 'http://localhost:3000',
    withCredentials: true,
    timeout: 500000,
});

export default api;