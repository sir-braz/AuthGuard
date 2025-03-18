import axios from 'axios';
import { API_BASE_URL, API_ENDPOINTS } from '../config/api.config';

const authService = {
    setAuthToken: (token) => {
        if (token) {
            localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            localStorage.removeItem('token');
            delete axios.defaults.headers.common['Authorization'];
        }
    },

    login: async (credentials) => {
        try {
            const response = await axios.post(
                `${API_BASE_URL}${API_ENDPOINTS.AUTH.LOGIN}`,
                credentials
            );
            const { token } = response.data;
            authService.setAuthToken(token);
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    logout: () => {
        authService.setAuthToken(null);
    },

    register: async (userData) => {
        try {
            const response = await axios.post(
                `${API_BASE_URL}${API_ENDPOINTS.AUTH.REGISTER}`,
                userData
            );
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    isAuthenticated: () => {
        return !!localStorage.getItem('token');
    },

    getToken: () => {
        return localStorage.getItem('token');
    }
};

export default authService;
