// src/services/CommentService.js
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchComments = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/comments?_limit=100`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
