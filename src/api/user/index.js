import api from '../index';

const UserService = {
    getAllUsers() {
        return api.get('/users');
    },
    getUserById(userId) {
        return api.get(`/users/${userId}`);
    },
    createUser(userData) {
        return api.post('/users', userData);
    },
    loginUser(userData) {
        return api.post('/login', userData);
    }
    // Другие методы для работы с пользователями
};

export default UserService;
