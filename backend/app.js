require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const cors = require('cors');
const router = require('./routes/index');
const { middlewaresError } = require('./middlewares/middlewaresError');

const { PORT = 3000 } = process.env;
const app = express();
app.use(cors());
mongoose.connect('mongodb://127.0.0.1/mestodb');

app.use(express.json());
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
app.use(router);
app.use(errors());
app.use(middlewaresError);

app.listen(PORT);
