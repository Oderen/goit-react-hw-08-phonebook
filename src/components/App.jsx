import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import Loader from './Loader/Loader,';

import { fetchCurrentUser } from '../redux/ApiOperations';

const HomePage = lazy(() => import('../p/Home.js'));
const RegisterPage = lazy(() => import('../p/Register.js'));
const LoginPage = lazy(() => import('../p/Login.js'));
const ContactsPage = lazy(() => import('../p/Contacts.js'));

const App = () => {
  const dispatch = useDispatch();
  // const isFirstRender = useRef(true);
  const isRefreshingCurrentUser = useSelector(state => state.auth.isRefreshing);

  /* eslint-disable */

  useEffect(() => {
    // if (isFirstRender.current) {
    //   isFirstRender.current = false;
    //   return;
    // }

    dispatch(fetchCurrentUser());
  }, []);
  /* eslint-enable */

  return isRefreshingCurrentUser ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
