import { useSelector } from 'react-redux';

import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation';

import css from './Appbar.module.css';

const Appbar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLogged);

  return (
    <div className={css.navigationContainer}>
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default Appbar;
