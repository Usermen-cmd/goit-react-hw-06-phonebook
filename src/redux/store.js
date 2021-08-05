import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ADD_CONTACT, DELETE_CONTACT, CHANGE_FILTEER } from './action-types';

const initState = {
  contacts: [],
  filter: '',
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
      return;
    default:
      return state;
  }
};

const store = createStore(reduser, composeWithDevTools());

export default store;
