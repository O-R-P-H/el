# Используем образ Node.js версии 20
FROM node:20

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы приложения внутрь контейнера
COPY . .

# Определяем команду для запуска приложения
CMD ["npm", "start"]
