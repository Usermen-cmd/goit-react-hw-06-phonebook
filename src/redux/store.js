import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ADD_CONTACT, DELETE_CONTACT, CHANGE_FILTEER } from './action-types';

const initState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', tel: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', tel: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', tel: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', tel: '227-91-26' },
  ],
  filter: '',
};

const persistConfig = {
  key: 'contacts',
  storage,
  whiteList: ['contacts'],
};

const reduser = (state = initState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(el => {
          return el.id !== action.payload;
        }),
      };
    case CHANGE_FILTEER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

const persistedReducer = persistReducer(persistConfig, reduser);
const store = createStore(persistedReducer, composeWithDevTools());
const persistor = persistStore(store);

export { store, persistor };
