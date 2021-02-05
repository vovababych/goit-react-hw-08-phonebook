import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { contactsSelectors, contactsOperations } from 'redux/contacts';

import s from './ContactsList.module.css';

function ContactsList() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
  const isLoading = useSelector(contactsSelectors.getIsLoading);
  const error = useSelector(contactsSelectors.getError);

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <>
      {!isLoading && !error && filteredContacts.length < 1 && (
        <p className={s.text}>Нет контактов</p>
      )}

      <ul className={s.contactsList}>
        {filteredContacts.length > 0 &&
          filteredContacts.map(({ id, name, number }) => (
            <li key={id} className={s.contact}>
              <span className={s.name}>{name}</span>
              <span className={s.number}>
                <a href={`number:+${number.toString().replace(/[^\d;]/g, '')}`}>
                  {number}
                </a>
              </span>
              <button
                className={s.btnDeleteContact}
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                x
              </button>
            </li>
          ))}
      </ul>
      {isLoading && <h3> Загрузка ...</h3>}
      {error && <h3>{error.message}</h3>}
    </>
  );
}

ContactsList.propTypes = {
  onDeleteContact: PropTypes.func,
};

export default ContactsList;
