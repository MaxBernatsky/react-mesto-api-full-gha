import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState('');

  const [description, setDescription] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      buttonText={'Сохранить'}
      name='profile'
      title='Редактировать профиль'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        type='text'
        className='popup__input popup__input_item_name'
        name='profileName'
        placeholder='Введите имя'
        required
        minLength='2'
        maxLength='40'
        id='name-input'
        onChange={handleChangeName}
        value={name || ''}
      />
      <span className='popup__input-error' id='name-input-error'></span>
      <input
        type='text'
        className='popup__input popup__input_item_descr'
        name='profileDescription'
        placeholder='Ваша профессия'
        required
        minLength='2'
        maxLength='200'
        id='profession-input'
        onChange={handleChangeDescription}
        value={description || ''}
      />
      <span className='popup__input-error' id='profession-input-error'></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
