import React, { FC } from 'react';
import styles from './EmojiContainer.module.css';
import { useDispatch } from 'react-redux';
import {
  updateNewMessageBody,
  addEmojiInRecent,
} from '../../store/emojiPicker/emojiPicker';
import { EmojiProps } from './types';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const EmojiItem: FC<EmojiProps> = ({ emoji }) => {
  const newMessageBody = useTypedSelector (state => state.emojiState.newMessageBody);
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
          //tabIndex="0"
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
