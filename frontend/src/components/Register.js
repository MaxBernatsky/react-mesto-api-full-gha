import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = ({ handleRegister }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(userData);
  };

  return (
    <div className='register'>
      <h2 className='register__title'>Регистрация</h2>
      <form className='register__form' onSubmit={handleSubmit}>
        <input
          id='user-email'
          type='email'
          className='register__input'
          name='email'
          placeholder='Email'
          required
          value={userData.email || ''}
          onChange={handleChange}
        />
        <input
          id='user-password'
          type='password'
          className='register__input'
          name='password'
          placeholder='Пароль'
          required
          onChange={handleChange}
          value={userData.password || ''}
        />
        <button className='register__button' type='submit'>
          Зарегистрироваться
        </button>
        <div className='register__wrap'>
          <p className='register__text'>Уже зарегистрированы?</p>
          <Link to='sign-in' className='register__link'>
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
