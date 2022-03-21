import React, {FC} from 'react';
import styles from './MessageContainer.module.css';

export interface iMessageProps {
  message: string
}

const Message: FC<iMessageProps> = ({ message }) => {
  
  const formatMessage = (messageBody: string) => {
    return messageBody.split(' ').map(word => {
      if (word.slice(0, 1) === '@' || word.slice(0, 1) === '#') {
        return <span className={styles.formattedWord}>{`${word} `}</span>;
      } else if (word.split('').includes('@')) {
        return (
          <a
            href={`mailto:${word}`}
            className={styles.formattedWord}
          >{`${word} `}</a>
        );
      } else if (word.slice(0, 4) === 'http') {
        return <a href={word} className={styles.formattedWord}>{`${word} `}</a>;
      }
      return <span>{`${word} `}</span>;
    });
  };

  return (
    <div>
      <span className={styles.messageWrapper}>{formatMessage(message)}</span>
    </div>
  );
};

export default Message;
