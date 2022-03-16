import React from 'react';
import styles from './EmojiContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateNewMessageBody,
  addEmojiInRecent,
} from '../../redux/emojiPicker/emojiPicker';

const EmojiItem = ({ emoji }) => {
  const newMessageBody = useSelector(state => state.newMessageBody);
  const dispatch = useDispatch();

  const onEmojiClick = () => {
    let body = newMessageBody + emoji;
    dispatch(updateNewMessageBody(body));
    dispatch(addEmojiInRecent(emoji));
  };

  return (
    <div>
      <li className={styles.emoji}>
        <button type="button">
          <div className={styles.emojiItem} onClick={onEmojiClick}>
            {emoji}
          </div>
        </button>
      </li>
    </div>
  );
};

export default EmojiItem;
