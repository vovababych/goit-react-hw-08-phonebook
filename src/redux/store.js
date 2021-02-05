import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactReducer from './contacts/contacts-reducer';
import { authReducer } from './auth';

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
  // logger,
];

const authPersistConfig = {
  key: 'auth',
  storage,
  blacklist: ['_persist'],
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    auth: persistReducer(authPersistConfig, authReducer),

    // persistReducer(contactsPersistConfig, authReducer),
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});
// export default store;

export const persistor = persistStore(store);

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
