import React from 'react';
import styles from './Input.module.css'

const Input = () => {
  return (
    <div>
      <input className={styles.inputWrapper} type='text' placeholder='Ваше сообщение'></input>
    </div>
  );
};

export default Input;