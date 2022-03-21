import { createStore } from 'redux';
import { rootReducer } from './emojiPicker';

const store = createStore(rootReducer);

export default store;
