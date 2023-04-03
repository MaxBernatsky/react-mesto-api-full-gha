function ImagePopup({ card, onClose, isOpen }) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <figure className='popup__figure'>
          <button
            onClick={onClose}
            className='popup__close'
            type='button'
            aria-label='Close'></button>
          <img
            src={card?.link}
            alt={card ? card.name : ''}
            className='popup__img'
          />
          <figcaption className='popup__descr'>
            {card ? card.name : ''}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
export default ImagePopup;
