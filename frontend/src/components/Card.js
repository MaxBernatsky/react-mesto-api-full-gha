import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useContext } from 'react';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;

  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  const placeLikeButtonClassName = `place__like-btn ${
    isLiked && 'place__like-btn_active'
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }
  return (
    <li className='place'>
      <img
        src={card.link}
        alt={card.name}
        className='place__img'
        onClick={handleClick}
      />
      {isOwn && (
        <button
          onClick={handleDeleteClick}
          className='place__delete-btn'
          type='button'
          aria-label='delete'></button>
      )}
      <div className='place__name'>
        <h2 className='place__title'>{card.name}</h2>
        <div className='place__likes'>
          <button
            onClick={handleLikeClick}
            className={placeLikeButtonClassName}
            type='button'
            aria-label='Like'></button>
          <span className='place__like-count'>{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
