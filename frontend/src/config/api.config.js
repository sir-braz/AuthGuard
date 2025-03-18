export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: '/auth/login',
        REGISTER: '/auth/register',
        REFRESH_TOKEN: '/auth/refresh-token',
    },
    USER: {
        PROFILE: '/user/profile',
        UPDATE: '/user/update',
    },
    // Add other endpoints as needed
};
