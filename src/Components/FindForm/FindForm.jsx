//Styles
import css from './FindForm.module.css';
//Utils
import { connect } from 'react-redux';
import { changeFilter } from 'redux/actions';

const FindForm = ({ value, onChangeFilter }) => {
  function onChange(event) {
    onChangeFilter(event.target.value);
  }
  return (
    <>
      <h2 className={css.header}>Find by name</h2>
      <input
        className={css.input}
        type="text"
        onChange={onChange}
        value={value}
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    value: state.filter,
  };
};

const mapDispathToProps = dispatch => {
  return {
    onChangeFilter: value => dispatch(changeFilter(value)),
  };
};

export default connect(mapStateToProps, mapDispathToProps)(FindForm);
