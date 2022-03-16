import React, { useState } from 'react';
import styles from './Input.module.css';
import styleButton from './../EmojiContainer/EmojiContainer.module.css';
import TextareaAutosize from 'react-textarea-autosize';
import { useDispatch, useSelector } from 'react-redux';
import { setShowingEmojies } from '../../redux/emojiPicker/emojiPicker';

const Input = () => {
  const [value, setValue] = useState('');

  const handleValueChange = e => {
    setValue(e.target.value);
  };

  const dispatch = useDispatch();

  const isShowEmojies = useSelector(state => state.isShowEmojies);

  const changeShowStatus = () => {
    dispatch(setShowingEmojies(isShowEmojies ? false : true));
  };

  return (
    <div className={styles.inputWrapper}>
      <TextareaAutosize
        aria-label="minimum height"
        minRows={1}
        placeholder="Ваше сообщение"
        style={{ width: 200 }}
        value={value}
        onChange={handleValueChange}
      />
      <div className={styleButton.smileButton} onClick={changeShowStatus}></div>
    </div>
  );
};

export default Input;
