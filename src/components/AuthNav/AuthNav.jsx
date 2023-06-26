import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.authintification}>
      <ul className={css.authintification__list}>
        <li>
          <NavLink to="/register" className={css.authintification__register}>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={css.authintification__signIn}>
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
