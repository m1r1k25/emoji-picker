import React, { FC, ReactNode } from 'react';
import styles from './EmojiContainer.module.css';
import EmojiItem from './EmojiItem';

const EmojiCategory: FC = ({ category }) => {
  const emojiItems = category.items.map(emoji => <EmojiItem emoji={emoji} />);

  return (
    <div>
      <ul className={styles.emojiGroup} data-display-name={category.title}>
        {emojiItems}
      </ul>
    </div>
  );
};

export default EmojiCategory;
