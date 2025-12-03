import apiClient from "./apiClient";

const apiService = {
    get: async (url, params = {}) => {
        try {
            const response = await apiClient.get(url, { params });
            return response.data;
        } catch (error) {
            console.log("srclibapiService.jsx", error);
            throw error || "Failed to fetch data";
        }
    },

    post: async (url, data = {}) => {
        try {
            const response = await apiClient.post(url, data);
            return response.data;
        } catch (error) {
            throw error?.response?.data?.errors || "Failed to create record";
        }
    },

    put: async (url, data = {}) => {
        try {
            const response = await apiClient.put(url, data);
            return response.data;
        } catch (error) {
            throw error?.response?.data?.errors || "Failed to update record";
        }
    },

    delete: async (url) => {
        try {
            const response = await apiClient.delete(url);
            return response.data;
        } catch (error) {
            throw error?.response?.data?.errors || "Failed to delete record";
        }
    },
};

export default apiService;
