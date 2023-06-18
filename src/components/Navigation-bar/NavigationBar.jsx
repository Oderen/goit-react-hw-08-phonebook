import css from './NavigationBar.module.css';

const NavigationBar = () => {
  return (
    <div className={css.navigationContainer}>
      <nav className={css.navigation}>
        <ul className={css.navigation__list}>
          <li className={css.navigation__list__item}>Home</li>
        </ul>
      </nav>
      <div className={css.authintification}>
        <ul className={css.authintification__list}>
          <li>
            <p className={css.authintification__register}>Register</p>
          </li>
          <li>
            <p className={css.authintification__signIn}>SignUp</p>
          </li>
        </ul>
      </div>
      <div className={css.profile}>
        <div className={css.profile__avatar}></div>
        <p className={css.profile__name}>Name</p>
        <a href="/goit-react-hw-08-phonebook" className={css.profile__signOut}>
          SignOut
        </a>
      </div>
    </div>
  );
};

export default NavigationBar;
