import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLogged);
  return (
    <nav className={css.navigation}>
      <ul className={css.navigation__list}>
        <NavLink to="/" className={css.navigation__list__item}>
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts" className={css.navigation__list__item}>
            Contacts
          </NavLink>
        )}
      </ul>
    </nav>
  );
};
