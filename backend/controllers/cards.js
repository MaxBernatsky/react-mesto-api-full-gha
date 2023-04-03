const Card = require('../models/card');
const { CREATED } = require('../utils/httpStatusCodes');
const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');

const getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => {
      res.send(cards);
    })
    .catch(next);
};

const createCard = (req, res, next) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => {
      res.status(CREATED).send(card);
    })
    .catch((error) => {
      if (error.name === 'ValidationError') {
        return next(
          new BadRequestError(
            'Переданы некорректные данные при создании карточки',
          ),
        );
      }
      return next(error);
    });
};

const deleteCard = (req, res, next) => {
  Card.findById(req.params.cardId)
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Карточка не найдена');
      }
      if (req.user._id !== card.owner.toString()) {
        throw new ForbiddenError('Нет прав для удаления карточки');
      }
      card
        .deleteOne()
        .then(() => res.status(200).send({ message: 'Карточка успешно удалена' }));
    })
    .catch((error) => {
      if (error.name === 'CastError') {
        return next(
          new BadRequestError('Ошибка при передачи данных о карточке'),
        );
      }
      return next(error);
    });
};

const likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Карточка не найдена');
      }
      res.send(card);
    })
    .catch((error) => {
      if (error.name === 'CastError') {
        return next(
          new BadRequestError('Ошибка при передачи данных о карточке'),
        );
      }
      return next(error);
    });
};

const dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Карточка не найдена');
      }
      res.send(card);
    })
    .catch((error) => {
      if (error.name === 'CastError') {
        return next(
          new BadRequestError('Ошибка при передачи данных о карточке'),
        );
      }
      return next(error);
    });
};
module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
