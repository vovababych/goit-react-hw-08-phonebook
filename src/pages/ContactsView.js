import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DecorContainer from '../components/DecorContainer';
import ContactsList from '../components/ContactsList';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import { contactsOperations } from '../redux/contacts';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <>
      <DecorContainer title={'Телефонная книга'}>
        <ContactForm />
      </DecorContainer>
      <DecorContainer title="Список контактов">
        <Filter />
        <ContactsList />
      </DecorContainer>
    </>
  );
}
