import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CssBaseline /> */}
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// const Home = lazy(() => import('../pages/Home/Home'));
// const Movies = lazy(() => import('../pages/Movies'));
// const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
// const Cast = lazy(() => import('./Cast'));
// const Reviews = lazy(() => import('./Reviews'));

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="movies" element={<Movies />} />
//         <Route path="movies/:movieID" element={<MovieDetails />}>
//           <Route path="cast" element={<Cast />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>
//       </Route>
//     </Routes>
//   );
// };
