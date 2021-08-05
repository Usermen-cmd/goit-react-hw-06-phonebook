//Styles
import css from './FindForm.module.css';

const FindForm = () => {
  return (
    <>
      <h2 className={css.header}>Find by name</h2>
      <input className={css.input} type="text" />
    </>
  );
};

export default FindForm;
