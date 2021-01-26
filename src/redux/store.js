import contactReducer from './contacts/contacts-reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const myMiddleware = store => next => action => {
//   console.log('Моя прослойка', action);
//   next(action);
// };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // myMiddleware,
  logger,
];

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter', '_persist'],
// };

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    // persistReducer(contactsPersistConfig, contactReducer),
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

// const persistor = persistStore(store);

export default store;
// export default { store, persistor };

// ----Middleware-----
// const myMiddleware = store => next => action=> {body}

// function myMiddleware(store) {
//   return function (next) {
//     return function (action) {
//       body;
//     };
//   };
// }
