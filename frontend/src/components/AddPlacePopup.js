import { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: name,
      link: link,
    });
  }

  useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  return (
    <PopupWithForm
      buttonText={'Создать'}
      name='popupPlaceForm'
      title='Новое место'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        type='text'
        className='popup__input popup__input_item_name'
        name='name'
        placeholder='Название'
        required
        minLength='2'
        maxLength='30'
        id='place-link-input-name'
        onChange={handleChangeName}
        value={name || ''}
      />
      <span className='popup__input-error' id='place-name-input-error'></span>
      <input
        type='url'
        className='popup__input popup__input_item_descr'
        name='link'
        placeholder='Ссылка на картинку'
        required
        id='place-link-input-descr'
        onChange={handleChangeLink}
        value={link || ''}
      />
      <span className='popup__input-error' id='place-link-input-error'></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
