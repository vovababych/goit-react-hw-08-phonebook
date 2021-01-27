import axios from 'axios';
// import {
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   deleteContactRequest,
//   deleteContactSuccess,
//   deleteContactError,
//   fetchContactRequest,
//   fetchContactSuccess,
//   fetchContactError,
// } from './contacts-actions';
import { actions } from './';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactRequest());

  try {
    const response = await axios.get('/contacts');
    dispatch(actions.fetchContactSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchContactError(error));
  }

  // axios
  //   .get('/contacts')
  //   .then(response => dispatch(fetchContactSuccess(response.data)))
  //   .catch(error => dispatch(fetchContactError(error)));
};

export const addContact = (name, tel) => dispatch => {
  const contact = { name, tel };
  dispatch(actions.addContactRequest());
  axios
    .post('/contacts', contact)
    .then(response => dispatch(actions.addContactSuccess(response.data)))
    .catch(error => dispatch(actions.addContactError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactRequest(id));
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch(error => dispatch(actions.deleteContactError(error)));
};
