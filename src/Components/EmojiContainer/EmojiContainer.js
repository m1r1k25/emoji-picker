import React, { useState } from 'react';
import styles from './EmojiContainer.module.css';
import EmojiCategory from './EmojiCategory';
import { useSelector } from 'react-redux';
import EmojiRecent from './EmojiRecent';

const EmojiContainer = () => {
  const [active, setActive] = useState(0);

  const onAllEmojiClick = () => {
    setActive(0);
  };

  const onRecentClick = () => {
    setActive(1);
  };

  const emojies = useSelector(state => state.emojies);

  const categories = emojies.map(category => (
    <EmojiCategory category={category} />
  ));

  const recentEmojies = useSelector(state => state.recentEmojies);

  return (
    <div className={styles.contentWrapper}>
      {active === 0 ? (
        <section className={styles.emojiScrollWrapper}>{categories}</section>
      ) : (
        <section className={styles.emojiScrollWrapper}>
          <EmojiRecent recentEmojies={recentEmojies} />
        </section>
      )}

      <div className={styles.footerSection}>
        <div
          className={`${styles.clickButton} ${
            active === 0 ? styles.clickButtonActive : ''
          }`}
          onClick={onAllEmojiClick}
        >
          <div className={styles.smileButton}></div>
        </div>
        <div
          className={`${styles.clickButton} ${
            active === 1 ? styles.clickButtonActive : ''
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
