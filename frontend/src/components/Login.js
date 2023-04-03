import { useState } from 'react';

const Login = ({ handleLogin }) => {
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
    handleLogin(userData);
  };
  return (
    <div className='login'>
      <h2 className='login__title'>Вход</h2>
      <form className='login__form' onSubmit={handleSubmit}>
        <input
          id='user-email'
          type='email'
          className='login__input'
          name='email'
          placeholder='Email'
          required
          onChange={handleChange}
          value={userData.email || ''}
        />
        <input
          id='user-password'
          type='password'
          className='login__input'
          name='password'
          placeholder='Пароль'
          required
          onChange={handleChange}
          value={userData.password || ''}
        />
        <button className='login__button' type='submit'>
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
