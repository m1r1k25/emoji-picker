import React, { useState } from 'react';
import styles from './EmojiContainer.module.css';
import EmojiCategory from './EmojiCategory';
import EmojiRecent from './EmojiRecent';
import { ICategory } from './types';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const EmojiContainer = () => {

  const [active, setActive] = useState(false);
  const recentEmojies = useTypedSelector(state => state.emojiState.recentEmojies);

  const onAllEmojiClick = () => {
    setActive(false);
  };

  const onRecentClick = () => {
    setActive(true);
  };

  const emojies = useTypedSelector(state => state.emojiState.emojies);

  const categories = emojies.map((category: ICategory) => (
    <EmojiCategory category={category} />
  ));

  return (
    <div className={styles.contentWrapper}>
      {!active ? (
        <section className={styles.emojiScrollWrapper}>{categories}</section>
      ) : (
        <section className={styles.emojiScrollWrapper}>
          <EmojiRecent recentEmojies={recentEmojies} />
        </section>
      )}

      <div className={styles.footerSection}>
        <div
          className={`${styles.clickButton} ${
            !active ? styles.clickButtonActive : ''
          }`}
          onClick={onAllEmojiClick}
        >
          <div className={styles.smileButton}></div>
        </div>
        <div
          className={`${styles.clickButton} ${
            active ? styles.clickButtonActive : ''
          }`}
          onClick={onRecentClick}
        >
          <div className={styles.timerButton}></div>
        </div>
      </div>
    </div>
  );
};

export default EmojiContainer;
