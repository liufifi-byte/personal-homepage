import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth'; // Adjust the URL as needed

export const login = async (username, password, role) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            username,
            password,
            role
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const register = async (username, password, role) => {
    try {
        const response = await axios.post(`${API_URL}/register`, {
            username,
            password,
            role
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};