//Styles
import css from './ContactList.module.css';

const ContactList = () => {
  return (
    <>
      <h2 className={css.header}>Your contacts</h2>
      <ul className={css.list}>
        <li className={css.listItem}>listItem</li>
      </ul>
    </>
  );
};

export default ContactList;
