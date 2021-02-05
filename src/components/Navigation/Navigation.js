import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import s from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" exact className={s.link} activeClassName={s.active}>
        Главная
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" className={s.link} activeClassName={s.active}>
          Контакты
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
