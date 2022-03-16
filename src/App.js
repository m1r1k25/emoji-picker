import React from 'react';
import EmojiContainer from './Components/EmojiContainer/EmojiContainer';
import Input from './Components/Input/Input';
import styles from './App.module.css';
import { useSelector } from 'react-redux';

function App() {
  const isShowEmojies = useSelector(state => state.isShowEmojies);
  return (
    <div className={styles.appWrapper}>
      {isShowEmojies ? <EmojiContainer /> : ''}
      <Input />
      <MessageContainer />
    </div>
  );
}

export default App;
