import React from 'react';
import styles from './EmojiContainer.module.css';
import { sections } from '../../sections';
import EmojiCategory from './EmojiCategory';

const EmojiContainer = () => {
const state = [...sections]

const categories = state.map((category) => <EmojiCategory category={category} />)

  return (
    <div className={styles.contentWrapper}>
      <section className={styles.emojiScrollWrapper}>
        {categories}
      </section>
    </div>
  );
};

export default EmojiContainer;