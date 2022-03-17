import React from 'react';
import styles from './Input.module.css';
import styleButton from './../EmojiContainer/EmojiContainer.module.css';
import TextareaAutosize from 'react-textarea-autosize';
import { useDispatch, useSelector } from 'react-redux';
import {
  setShowingEmojies,
  sendMessage,
  updateNewMessageBody,
} from '../../redux/emojiPicker/emojiPicker';

const Input = () => {
  const isShowEmojies = useSelector(state => state.isShowEmojies);
  const newMessageBody = useSelector(state => state.newMessageBody);

  const dispatch = useDispatch();

  /*  const messages = useSelector(state => state.messages);
  console.log(messages); */

  /*   const recentEmojies = useSelector(state => state.recentEmojies);
  console.log(recentEmojies); */

  const changeShowStatus = () => {
    dispatch(setShowingEmojies(isShowEmojies ? false : true));
  };

  const onNewMessageChange = event => {
    dispatch(updateNewMessageBody(event.target.value));
  };

  const onSendMessageClick = () => {
    dispatch(sendMessage(newMessageBody));
    dispatch(updateNewMessageBody(''));
  };

  return (
    <div className={styles.inputWrapper}>
      <TextareaAutosize
        aria-label="minimum height"
        minRows={1}
        placeholder="Ваше сообщение"
        style={{ width: 180 }}
        value={newMessageBody}
        onChange={onNewMessageChange}
      />
      <div
        className={styleButton.sendButton}
        onClick={onSendMessageClick}
      ></div>
      <div className={styleButton.smileButton} onClick={changeShowStatus}></div>
    </div>
  );
};

export default Input;
