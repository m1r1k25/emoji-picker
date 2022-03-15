import React, { useState } from 'react';
import styles from './Input.module.css';

const Input = () => {
  const [value, setValue] = useState('');
  const handleValueChange = e => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.inputWrapper}>
      <textarea
        rows="1"
        value={value}
        onChange={handleValueChange}
        type="text"
        placeholder="Ваше сообщение"
      ></textarea>
    </div>
  );
};

export default Input;
