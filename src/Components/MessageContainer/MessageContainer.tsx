import React from 'react';
import Message from './Message';
import { useSelector } from 'react-redux';
import styles from './MessageContainer.module.css';

const MessageContainer = () => {
  const messages = useSelector(state => state.messages);
  const allMessages = messages.map(message => <Message message={message} />);

  return (
    <div className={styles.messagesContainer}>{allMessages.reverse()}</div>
  );
};

export default MessageContainer;
