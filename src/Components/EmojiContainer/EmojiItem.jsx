import React from 'react';
import styles from './EmojiContainer.module.css';

const EmojiItem = ({emoji}) => {
  return (
    <div>
      <li className={styles.emoji}>
        <button type="button"> 
          <div className={styles.emojiItem}>{emoji}</div>
        </button>
      </li>
    </div>
  );
};

export default EmojiItem;