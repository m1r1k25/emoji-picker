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

  const changeShowStatus = () => {
    dispatch(setShowingEmojies(isShowEmojies ? false : true));
  };

  const onNewMessageChange = event => {
    dispatch(updateNewMessageBody(event.target.value));
  };

  const createNewMessage = () => {
    if (!newMessageBody) {
      return;
    }
    dispatch(sendMessage(newMessageBody));
    dispatch(updateNewMessageBody(''));
  };

  const onSendMessageClick = () => {
    createNewMessage();
  };

  const onEnterPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      createNewMessage();
    }
  };

  return (
    <div className={styles.inputWrapper}>
      <TextareaAutosize
        minRows={1}
        placeholder="Ваше сообщение"
        value={newMessageBody}
        onChange={onNewMessageChange}
        onKeyDown={onEnterPress}
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
