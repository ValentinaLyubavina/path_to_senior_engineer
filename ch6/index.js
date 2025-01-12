const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');
const app = express();
require('dotenv').config();

const PasswordDB = process.env.PasswordDB;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send('Привет из Node API Server');
});

mongoose
    .connect(
    `mongodb+srv://admin:${PasswordDB}@studentdb.swlqu.mongodb.net/Node-API?retryWrites=true&w=majority&appName=StudentDB`
    )
    .then(() => {
        app.listen(3000, () => {
            console.log('Сервер запустился на порту 3000');
        });
        console.log('Подключено к базе данных!');
    })
    .catch(() => {
        console.log('Не удалось подключиться!');
    });
