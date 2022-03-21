import React from 'react';
import styles from './Input.module.css';
import styleButton from './../EmojiContainer/EmojiContainer.module.css';
import TextareaAutosize from 'react-textarea-autosize';
import { useDispatch } from 'react-redux';
import {
  setShowingEmojies,
  sendMessage,
  updateNewMessageBody,
} from '../../store/emojiPicker/emojiPicker';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Input = () => {
  const isShowEmojies = useTypedSelector(state => state.emojiState.isShowEmojies);
  const newMessageBody = useTypedSelector(state => state.emojiState.newMessageBody);

  const dispatch = useDispatch();

  const changeShowStatus = () => {
    dispatch(setShowingEmojies(isShowEmojies ? false : true));
  };

  const onNewMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateNewMessageBody(event.target.value));
  };

  const createNewMessage = () => {
    if (!newMessageBody) return;
    if (newMessageBody.trim() === '') {
      dispatch(updateNewMessageBody(''));
      return;
    }
    dispatch(sendMessage(newMessageBody));
    dispatch(updateNewMessageBody(''));
  };

  const onSendMessageClick = () => {
    createNewMessage();
  };

  const onEnterPress = (e: React.KeyboardEvent) => {
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
