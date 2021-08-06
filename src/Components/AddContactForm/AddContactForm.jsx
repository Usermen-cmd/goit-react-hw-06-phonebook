//Styles
import css from './AddContactForm.module.css';

import { addContact } from 'redux/actions';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import 'yup-phone';
import { toast, Toaster } from 'react-hot-toast';

import { Formik, Form, Field } from 'formik';

const schema = Yup.object().shape({
  name: Yup.string().min(2, '').max(20, '').required(''),
  tel: Yup.string().phone('', false, '').required(),
});

const AddContactForm = ({ addContact, constantsNames }) => {
  function onSubmit(event, actions) {
    console.log('qwe');
    return;
  }

  return (
    <>
      <h1 className={css.header}>Phonebook</h1>
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        onSubmit={onSubmit}
        validationSchema={schema}
      >
        {({ errors, touched }) => (
          <div errors={errors} touched={touched}>
            <Form>
              <label htmlFor="name">Name</label>
              <Field id="name" name="name" placeholder="Enter name" />

              {touched.name && errors.name && <p>{errors.name}</p>}
              <label htmlFor="phone">Phone</label>
              <Field id="phone" name="phone" placeholder="Enter phone number" />

              {touched.tel && errors.tel && <p>{errors.tel}</p>}
              <button type="submit">add</button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

const mapStateToProps = state => {
  return {
    constantsNames: state.contacts.map(el => el.name),
  };
};

const mapDispathToProps = dispatch => {
  return {
    addContact: contact => dispatch(addContact(contact)),
  };
};

export default connect(mapStateToProps, mapDispathToProps)(AddContactForm);
