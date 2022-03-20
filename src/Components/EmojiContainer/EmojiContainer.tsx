import React, { useState } from 'react';
import styles from './EmojiContainer.module.css';
import EmojiCategory from './EmojiCategory';
import { useSelector } from 'react-redux';
import EmojiRecent from './EmojiRecent';

const EmojiContainer = () => {
  const [active, setActive] = useState(false);
  const recentEmojies = useSelector(state => state.recentEmojies);

  const onAllEmojiClick = () => {
    setActive(false);
  };

  const onRecentClick = () => {
    setActive(true);
  };

  const emojies = useSelector(state => state.emojies);

  const categories = emojies.map(category => (
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
