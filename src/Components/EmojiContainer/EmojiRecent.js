import React from 'react';
import styles from './EmojiContainer.module.css';
import EmojiItem from './EmojiItem';

const EmojiRecent = ({ recentEmojies }) => {
  const emojiItems = recentEmojies.map(emoji => <EmojiItem emoji={emoji} />);

  return (
    <div>
      <ul
        className={styles.emojiGroup}
        data-display-name="Недавно используемые"
      >
        {emojiItems}
      </ul>
    </div>
  );
};

export default EmojiRecent;
