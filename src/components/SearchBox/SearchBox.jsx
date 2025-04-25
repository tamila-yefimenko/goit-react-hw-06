import { useId } from 'react';
import s from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  const id = useId();
  return (
    <div className={s.filterInputWrapper}>
      <label className={s.inputTitle} htmlFor={id}>
        Find contacts by name
      </label>
      <input
        className={s.filterInput}
        value={value}
        onChange={onChange}
        type="text"
        id={id}
      ></input>
    </div>
  );
};

export default SearchBox;
