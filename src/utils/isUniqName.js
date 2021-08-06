import { store } from 'redux/store';

export const isUniqName = name => {
  const contacts = store.getState().contacts;
  const contactNames = contacts.map(el => el.name);
  return contactNames.includes(name);
};
