import axios from 'axios';

const API_URL = 'http://localhost:500/api';

const api = axios.create({
    vaseURL: API_URL,
    header: {
        'Content-Type': 'application/json',
    },
});

export const registerUser = (useData) => api.post('/users/register', userData);
export const loginUser = (useData) => api.post('/users/login', userData);
export const getUsers = () => api.get('/users');
export const createContent = (contentData) => api.post('/content', contentData);
export const getContent = () => api.get('/content');
export const updateContent = (id, contentData) => api.put(`/content/${id}`, contentData);
export const deleteContent = (id) => api.delete(`/content/${id}`);