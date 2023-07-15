import { NavLink } from 'react-router-dom';
import css from './Phonebook.module.css';

const Phonebook = () => {
  return (
    <div className={css.phonebook}>
      <div className={css.phonebook__box}>
        <h1 className={css.phonebook__title}>
          <span>Want to see Phonebook project?</span>
        </h1>
        <NavLink to="/register" className={css.phonebook__link}>
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};

export default Phonebook;
