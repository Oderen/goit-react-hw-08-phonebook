import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/ApiOperations';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user.email);
  return (
    <div className={css.profile}>
      <p className={css.profile__email}>{email}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </button>
    </div>
  );
};
