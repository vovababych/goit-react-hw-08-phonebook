import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
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
};

// export const addContact = (name, tel) => async dispatch => {
//   const contact = { name, tel };
//   dispatch(actions.addContactRequest());
//   try {
//     const response = axios.post('/contacts', contact);
//     dispatch(actions.addContactSuccess(response.data));
//   } catch (error) {
//     dispatch(actions.addContactError(error));
//   }
// };

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

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async () => {
//     const response = await axios.get('/contacts');
//     console.log('response.data', response.data);
//     return response.data;
//   },
// );

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (name, tel) => {
//     const contact = { name, tel };
//     const response = await axios.post('/contacts', contact);
//     console.log('response', response);
//     return response;
//   },
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async id => {
//     const response = await axios.delete(`/contacts/${id}`);
//     return id;
//   },
// );
