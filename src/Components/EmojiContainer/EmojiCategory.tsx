import React, { FC } from 'react';
import styles from './EmojiContainer.module.css';
import EmojiItem from './EmojiItem';
import { ICategoryProps } from './types';

const EmojiCategory: FC<ICategoryProps> = ({ category }) => {

  const emojiItems = category.items.map((emoji: string) => <EmojiItem emoji={emoji} />);

  return (
    <div>
      <ul className={styles.emojiGroup} data-display-name={category.title}>
        {emojiItems}
      </ul>
    </div>
  );
};

export default EmojiCategory;
