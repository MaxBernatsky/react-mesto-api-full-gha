import successIcon from '../images/success-icon.svg';
import errorIcon from '../images/error-icon.svg';

const InfoToolTip = ({ onClose, isOpen, isSuccess }) => {
  const infoToolTipImg = `${isSuccess ? successIcon : errorIcon}`;
  const caption = `${
    isSuccess
      ? 'Вы успешно зарегистрировались!'
      : `Что-то пошло не так!
      Попробуйте ещё раз.`
  }`;
  return (
    <div className={`popup  ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__wrap'>
        <button
          onClick={onClose}
          className='popup__close'
          type='button'
          aria-label='Close'></button>
        <img className='popup__img' src={infoToolTipImg} alt={caption} />
        <p className='popup__caption'>{caption}</p>
      </div>
    </div>
  );
};

export default InfoToolTip;
