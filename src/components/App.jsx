import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import SignIn from './Auth-form/SignIn';
import NavigationBar from './Navigation-bar/NavigationBar';

export const App = () => {
  return (
    <div>
      <NavigationBar />
      <SignIn />
    </div>
  );
};
