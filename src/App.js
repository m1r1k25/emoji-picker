import React from 'react'
import EmojiContainer from './Components/EmojiContainer/EmojiContainer'
import Input from './Components/Input/Input'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.appWrapper}>
      <EmojiContainer />
      <Input />
    </div>
  )
}

export default App
