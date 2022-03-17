import React from 'react';
import Message from './Message';
import { useDispatch, useSelector } from 'react-redux';

const MessageContainer = () => {
  const messages = useSelector(state => state.messages);
  const allMessages = messages.map(message => <Message message={message} />);

  return <div>{allMessages.reverse()}</div>;
};

export default MessageContainer;
