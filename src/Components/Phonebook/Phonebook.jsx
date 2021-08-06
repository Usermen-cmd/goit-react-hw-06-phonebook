//Components
import AddContactForm from 'Components/AddContactForm/AddContactForm';
import ContactList from 'Components/ContactList/ContactList';
import FindForm from 'Components/FindForm/FindForm';
//Styles
import css from './Phonebook.module.css';
import { Toaster } from 'react-hot-toast';

const Phonebook = () => {
  return (
    <div className={css.container}>
      <AddContactForm />
      <FindForm />
      <ContactList />
      <Toaster position="top-right" />
    </div>
  );
};

export default Phonebook;
