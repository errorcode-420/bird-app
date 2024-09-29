import axios from "axios";

const API_URL = 'http://localhost:5000';

const ApiService = {
    async post(endpoint: string, data: any) {
        try {

            const response = await axios.post(`${API_URL}/${endpoint}`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            return response.data;

        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    },
};

export default ApiService;
