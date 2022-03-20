import React, { FC } from 'react';
import styles from './EmojiContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateNewMessageBody,
  addEmojiInRecent,
} from '../../redux/emojiPicker/emojiPicker';

const EmojiItem = ({ emoji }: any) => {
  const newMessageBody = useSelector((state: any) => state.newMessageBody);
  const dispatch = useDispatch();

  const addEmoji = () => {
    let body = newMessageBody + emoji;
    dispatch(updateNewMessageBody(body));
    dispatch(addEmojiInRecent(emoji));
  };

  const onEmojiClick = () => {
    addEmoji();
  };

  return (
    <div>
      <li className={styles.emoji}>
        <button
          tabIndex="0"
          type="button"
          className={styles.emojiItem}
          onClick={onEmojiClick}
        >
          {emoji}
        </button>
      </li>
    </div>
  );
};

export default EmojiItem;
