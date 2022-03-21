import React from 'react';
import Message from './Message';
import styles from './MessageContainer.module.css';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const MessageContainer = () => {
  const messages = useTypedSelector(state => state.emojiState.messages);
  
  const allMessages = messages.map((message: string) => <Message message={message} />);

  return (
    <div className={styles.messagesContainer}>{allMessages.reverse()}</div>
  );
};

export default MessageContainer;
