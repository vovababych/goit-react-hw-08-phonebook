import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Введите имя"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          value={email}
          placeholder="Введите email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          value={password}
          placeholder="Введите пароль"
          onChange={handleChange}
        />

        <input type="submit" value="Зарегистрироваться" />
      </form>
    </>
  );
}
