//Styles
import css from './ContactList.module.css';

import { connect } from 'react-redux';
import { deleteContact } from 'redux/actions';

const ContactList = ({ contacts, deleteContact }) => {
  function onDeleteBtnClick(event, id) {
    deleteContact(id);
  }
  return (
    <>
      <h2 className={css.header}>Your contacts</h2>
      <ul className={css.list}>
        {contacts.map(el => {
          return (
            <li className={css.listItem} key={el.id}>
              <span>{el.name}</span>
              <span>{el.phone}</span>
              <button type="button" onClick={e => onDeleteBtnClick(e, el.id)}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
  };
};

const mapDispathToProps = dispatch => {
  return {
    deleteContact: id => dispatch(deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispathToProps)(ContactList);
