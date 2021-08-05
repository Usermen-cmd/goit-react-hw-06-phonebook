//Styles
import css from './AddContactForm.module.css';

const AddContactForm = () => {
  return (
    <>
      <h1 className={css.header}>Phonebook</h1>
      <form className={css.form}>
        <input className={css.input} type="text" name="name" />
        <input className={css.input} type="tel" name="phone" />
        <button className={css.button} type="submit">
          add contact
        </button>
      </form>
    </>
  );
};

export default AddContactForm;
