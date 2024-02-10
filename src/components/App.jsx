import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { selectIsRefreshing } from '../redux/auth/authSelectors';
import { GlobalStyle } from './GlobalStyle';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const PhonebookPage = lazy(() => import('pages/PhonebookPage'));

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute component={<PhonebookPage />} redirectTo="/login" />
            }
          />
        </Route>
      </Routes>

      <Toaster position="top-center" reverseOrder={false} />
      <GlobalStyle />
    </div>
  );
};
