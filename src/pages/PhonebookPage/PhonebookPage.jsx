import { ContactForm, Filter, ContactList } from 'components';

import { Container, MaineTitle, Section, Title } from './PhonebookPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';

export const MyPhonebook = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section>
        <MaineTitle>Phonebook</MaineTitle>
        <ContactForm />
      </Section>

      <Section>
        <Title>Contacts</Title>

        {contacts.length > 0 && !error && <Filter />}

        {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
        {contacts.length === 0 && !isLoading && !error && (
          <p>You don't have any contacts yet</p>
        )}

        <ContactList />
      </Section>
    </Container>
  );
};
