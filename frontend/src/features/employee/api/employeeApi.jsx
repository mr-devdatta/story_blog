import apiService from "../../../lib/apiService";
import { API_ENDPOINTS, API_BASE_URL } from "../../../config/constant";

export const createEmployee = async (formData) => {
    const payload = { ...formData, created_date: Date.now() };

    try {
        const response = await apiService.post(API_ENDPOINTS.EMPLOYEES, payload);
        return response;
    } catch (error) {
        console.error("Failed to create employee:", error);
        throw error;
    }
};
