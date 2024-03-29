import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { selectIsRefreshing } from '../redux/auth/authSelectors';
import { GlobalStyle } from './GlobalStyle';
import { Toaster } from 'react-hot-toast';
import { refresh } from '../redux/auth/authOperations';
import { Box } from '@chakra-ui/react';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const PhonebookPage = lazy(() =>
  import('../pages/PhonebookPage/PhonebookPage')
);

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <Box
      overflow="hidden"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      bgGradient="linear(to-b,  #c0f8ee, #7adbf9, #8cb9f9, #fdbad8)"
      maxW="720px"
      minHeight="100vh"
      mx="auto"
    >
      {isRefreshing ? (
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
                  <PrivateRoute
                    component={<PhonebookPage />}
                    redirectTo="/login"
                  />
                }
              />
            </Route>
          </Routes>

          <Toaster position="top-center" reverseOrder={false} />
          <GlobalStyle />
        </div>
      )}
    </Box>
  );
};
