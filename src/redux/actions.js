import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contact/add');
const deleteContact = createAction('contact/delete');
const changeFilter = createAction('filter/change');

export { addContact, deleteContact, changeFilter };
