import React, {FC} from 'react';
import styles from './EmojiContainer.module.css';
import EmojiItem from './EmojiItem';
import {RecentEmojiesProps} from './types';

const EmojiRecent: FC<RecentEmojiesProps> = ({ recentEmojies }) => {
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
