import React from 'react';
import EmojiContainer from './Components/EmojiContainer/EmojiContainer';
import Input from './Components/Input/Input';
import styles from './App.module.css';
import MessageContainer from './Components/MessageContainer/MessageContainer';
import { useSelector, RootStateOrAny } from 'react-redux';

const App = () => {
  const isShowEmojies = useSelector((state: RootStateOrAny) => state.emojiState.isShowEmojies);

  return (
    <div className={styles.appWrapper}>
      {isShowEmojies ? <EmojiContainer /> : ''}
      <Input />
      <MessageContainer />
    </div>
  );
};

export default App;
