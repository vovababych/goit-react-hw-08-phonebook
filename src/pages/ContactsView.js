import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/Container';
import DecorContainer from '../components/DecorContainer';
import ContactsList from '../components/ContactsList';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import { contactsOperations, contactsSelectors } from '../redux/contacts';

// const barStyles = {
//   display: 'flex',
//   alignItems: 'flex-end',
//   marginBottom: 20,
// };

export default function ContactsView(params) {
  const dispatch = useDispatch();
  // const isLoadingTodos = useSelector(contactsSelectors.getLoading);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <Container>
      {/* {isLoadingTodos && <h1>Загружаем...</h1>} */}
      <DecorContainer title={'Телефонная книга'}>
        <ContactForm />
      </DecorContainer>
      <DecorContainer title="Список контактов">
        <Filter />
        <ContactsList />
      </DecorContainer>
      {/* <ContactForm />
      <Filter />
      {isLoadingTodos && <h1>Загружаем...</h1>}
      <ContactsList /> */}
    </Container>
  );
}
