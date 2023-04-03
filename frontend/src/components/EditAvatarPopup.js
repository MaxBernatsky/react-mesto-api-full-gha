import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatarRef.current.value);
  }

  return (
    <PopupWithForm
      buttonText={'Сохранить'}
      name='popupChangeForm'
      title='Обновить аватар'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        type='url'
        className='popup__input popup__input_item_descr'
        name='link'
        placeholder='Ссылка на картинку'
        required
        id='avatar-link-input'
        ref={avatarRef}
      />
      <span className='popup__input-error' id='avatar-link-input-error'></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
