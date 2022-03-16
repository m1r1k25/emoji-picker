import React from 'react';
import styles from './MessageContainer.module.css';
import Message from './Message';

const messageContainer = () => {
  return (
    <div className={styles.messagesContainer}>
      <Message />
    </div>
  );
};

export default messageContainer;
