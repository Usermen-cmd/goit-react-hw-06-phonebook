//Styles
import css from './AddContactForm.module.css';

import { addContact } from 'redux/actions';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const AddContactForm = ({ addContact }) => {
  function onSubmit(event) {
    event.preventDefault();

    const name = event.target.name.value;
    const phone = event.target.phone.value;

    addContact({
      id: uuidv4(),
      name,
      phone,
    });

    event.target.reset();
  }

  return (
    <>
      <h1 className={css.header}>Phonebook</h1>
      <form className={css.form} onSubmit={onSubmit}>
        <input className={css.input} type="text" name="name" />
        <input className={css.input} type="tel" name="phone" />
        <button className={css.button} type="submit">
          add contact
        </button>
      </form>
    </>
  );
};

const mapDispathToProps = dispatch => {
  return {
    addContact: contact => dispatch(addContact(contact)),
  };
};

export default connect(null, mapDispathToProps)(AddContactForm);
