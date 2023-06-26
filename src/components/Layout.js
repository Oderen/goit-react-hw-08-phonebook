import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Appbar from './Appbar/Appbar';

const Layout = () => {
  return (
    <div>
      <header>
        <Appbar />
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
