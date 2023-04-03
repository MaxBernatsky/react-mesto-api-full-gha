import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <main className='container'>
      <section className='profile'>
        <div className='profile__img-container'>
          <img
            src={currentUser.avatar}
            alt='Ваш Аватар'
            className='profile__img'
          />
          <button
            onClick={onEditAvatar}
            className='profile__img-edit'
            type='button'
            aria-label='edit-avatar'></button>
        </div>
        <div className='profile__info'>
          <h1 className='profile__title'>{currentUser.name}</h1>
          <button
            className='profile__btn-edit'
            onClick={onEditProfile}
            type='button'
            aria-label='Edit'></button>
          <p className='profile__subtitle'>{currentUser.about}</p>
        </div>
        <button
          onClick={onAddPlace}
          className='profile__btn-add'
          type='button'
          aria-label='Add'></button>
      </section>

      <section className='content'>
        <ul className='places'>
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
