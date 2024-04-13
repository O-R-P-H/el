import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Замените на URL вашего бэкенда

const api = axios.create({
    baseURL: API_URL,
    timeout: 10000, // Время ожидания ответа в миллисекундах
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
