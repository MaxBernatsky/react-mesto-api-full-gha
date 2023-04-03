const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const userRouter = require('./users');
const cardRouter = require('./cards');
const { auth } = require('../middlewares/auth');
const { createUser, login } = require('../controllers/users');
const NotFoundError = require('../errors/NotFoundError');
const regexUrl = require('../utils/validation');

router.post(
  '/signup',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
      avatar: Joi.string().pattern(regexUrl),
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  }),
  createUser,
);

router.post(
  '/signin',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  }),
  login,
);

router.use(auth);

router.use('/users', userRouter);

router.use('/cards', cardRouter);

router.use('*', () => {
  throw new NotFoundError('Страница не найдена');
});

module.exports = router;
