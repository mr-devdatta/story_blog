import axios from "axios";
import { API_BASE_URL } from "../config/constant";

const apiClient = axios.create({
    baseURL: API_BASE_URL || "http://localhost:5173/", // fallback
    timeout: 15000,
    headers: {
        // 'X-API-Key': 'your-static-api-key',
        "Content-Type": "application/json",
    },
});

// Add token automatically (if available)
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("auth_token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);

// Handle global errors
apiClient.interceptors.response.use(
    (response) => {
        // Example: Return only the data object for simplicity
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem("auth_token");
        }
        return Promise.reject(error);
    }
);

export default apiClient;
