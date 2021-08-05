import { ADD_CONTACT, DELETE_CONTACT, CHANGE_FILTEER } from './action-types';

const addContact = contact => {
  return {
    type: ADD_CONTACT,
    payload: contact,
  };
};

const deleteContact = id => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};

const changeFilter = value => {
  return {
    type: CHANGE_FILTEER,
    payload: value,
  };
};

export { addContact, deleteContact, changeFilter };
