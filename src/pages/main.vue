<template>
  <div class="wrapper">
    <h1>WELCOME</h1>
    <!-- Форма для регистрации пользователя -->
    <input v-model="email" class="email_input" placeholder="email">
    <input v-model="password" type="password" class="password_input" placeholder="password">
    <div class="button_div">
      <!-- Кнопка для регистрации -->
      <button @click="register" class="register_button">Register</button>
      <!-- Кнопка для входа -->
      <button @click="login" class="enter_button">Enter</button>
    </div>
  </div>
</template>

<script>
import UserService from '../api/user'; // Импортируем сервис для работы с пользователями
import { router } from "@/router/router";

export default {
  name: "MainPage",
  data() {
    return {
      email: '', // Поле для хранения email
      password: '', // Поле для хранения пароля
    };
  },
  methods: {
    // Метод для регистрации нового пользователя
    async register() {
      try {
        const userData = { email: this.email, password: this.password }; // Формируем объект с данными пользователя
        const response = await UserService.createUser(userData); // Отправляем данные на сервер для регистрации
        console.log(response.data); // Выводим ответ в консоль
        // Если регистрация прошла успешно, перенаправляем пользователя на страницу входа
        await router.push({path: "/Player"});
      } catch (error) {
        console.error(error); // Выводим ошибку в консоль, если регистрация не удалась
      }
    },
    // Метод для входа пользователя
    async login() {
      // Реализация метода login
      try {
        const userData = { email: this.email, password: this.password }; // Формируем объект с данными пользователя
        const response = await UserService.loginUser(userData); // Отправляем запрос на сервер для входа
        console.log(response.data); // Выводим ответ в консоль
        // Если вход прошел успешно, перенаправляем пользователя на страницу профиля
        await router.push({ path: "/Player" });
      } catch (error) {
        console.error(error); // Выводим ошибку в консоль, если вход не удался
      }
    },
  }
}
</script>



<style scoped>
.button_div{
  width: 556px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.email_input {
  width: 556px;
  height: 27px;
  margin-top: 46px;
  background-color: transparent;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: 1px #E6E6E6 solid;
  outline: none;
  color: #E6E6E6;
  font-size: 20px;
  font-family: "Anonymous Pro", sans-serif;
  text-indent: 14px;
}

.password_input {
  width: 556px;
  height: 27px;
  margin-top: 30px;
  background-color: transparent;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: 1px #E6E6E6 solid;
  outline: none;
  color: #E6E6E6;
  font-size: 20px;
  font-family: "Anonymous Pro", sans-serif;
  text-indent: 10px;
}

input::placeholder {
  margin-left: 18px;
  color: rgba(230, 230, 230, 0.25);
  font-size: 20px;
  font-family: "Anonymous Pro", sans-serif;
}

.wrapper {
  justify-content: center;
  position: fixed;
  z-index: 1;
  background-size: cover;
  background-position: center center;
  background-color: #212121;
  align-items: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.enter_button {
  cursor: pointer;
  font-family: "Anonymous Pro", sans-serif;
  align-items: center;
  display: flex;
  border: none;
  background-color: transparent;
  color: white;
  justify-content: center;
  font-size: 24px;
  margin-top: 40px;
  letter-spacing: 5px;
}
.register_button {
  cursor: pointer;
  font-family: "Anonymous Pro", sans-serif;
  align-items: center;
  display: flex;
  border: none;
  background-color: transparent;
  color: white;
  justify-content: center;
  font-size: 24px;
  margin-top: 40px;
  letter-spacing: 5px;
}

h1 {
  font-weight: 100;
  font-family: "Anonymous Pro", sans-serif;
  letter-spacing: 10px;
  font-size: 62px;
  color: white;
}
</style>
