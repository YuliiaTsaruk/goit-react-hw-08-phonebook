// import { ContactForm, Filter, ContactList } from 'components';

// import { GlobalStyle } from './GlobalStyle';
// import { Container, MaineTitle, Section, Title } from './App.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   selectContacts,
//   selectError,
//   selectIsLoading,
// } from '../redux/selectors';
// import { useEffect } from 'react';
// import { fetchContacts } from '../redux/contacts/operations';
// import { Toaster } from 'react-hot-toast';
import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { selectIsRefreshing } from '../redux/auth/authSelectors';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const PhonebookPage = lazy(() => import('pages/PhonebookPage'));

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
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
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
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
  );
};

// export const App = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContacts);
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);
//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <Container>
//       <Section>
//         <MaineTitle>Phonebook</MaineTitle>
//         <ContactForm />
//       </Section>

//       <Section>
//         <Title>Contacts</Title>

//         {contacts.length > 0 && !error && <Filter />}

//         {isLoading && <p>Loading contacts...</p>}
//         {error && <p>{error}</p>}
//         {contacts.length === 0 && !isLoading && !error && (
//           <p>You don't have any contacts yet</p>
//         )}

//         <ContactList />
//       </Section>
//       <Toaster position="top-center" reverseOrder={false} />
//       <GlobalStyle />
//     </Container>
//   );
// };
