import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectors, operations } from 'redux/contacts';

import s from './ContactsList.module.css';

function ContactsList() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);

  const filteredContacts = useSelector(selectors.getFilteredContacts);
  const isLoading = useSelector(selectors.getIsLoading);
  const error = useSelector(selectors.getError);

  const onDeleteContact = id => dispatch(operations.deleteContact(id));

  return (
    <>
      {!isLoading && !error && filteredContacts.length < 1 && (
        <p className={s.text}>Нет контактов</p>
      )}

      <ul className={s.contactsList}>
        {filteredContacts.length > 0 &&
          filteredContacts.map(({ id, name, tel }) => (
            <li key={id} className={s.contact}>
              <span className={s.name}>{name}</span>
              <span className={s.phone}>
                <a href={`tel:+${tel.toString().replace(/[^\d;]/g, '')}`}>
                  {tel}
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
