import { EmojiPickerActionsTypes, EmojiPickerState, EmojiPickerAction } from '../types/emojiPickerTypes'
import { emojies } from '../../assets/emojies'

const maxQuantityOfRecentEmojies = 25;

const initialState: EmojiPickerState = {
  emojies: [...emojies],
  recentEmojies: [],
  isShowEmojies: false,
  newMessageBody: '',
  messages: [],
};

const emojiPicker = (state = initialState, action: EmojiPickerAction): EmojiPickerState => {
  switch (action.type) {
    case EmojiPickerActionsTypes.SET_SHOWING_EMOJIES:
      return {
        ...state,
        isShowEmojies: action.payload,
      };
    case EmojiPickerActionsTypes.UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.payload,
      };
    case EmojiPickerActionsTypes.SEND_NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case EmojiPickerActionsTypes.ADD_EMOJI_IN_RECENT:
      return {
        ...state,
        recentEmojies: [
          ...new Set([...state.recentEmojies, action.payload]),
        ].splice(-maxQuantityOfRecentEmojies),
      };
    default:
      return state;
  }
};

export default emojiPicker;

export const setShowingEmojies = (isShowing: boolean) => ({
  type: EmojiPickerActionsTypes.SET_SHOWING_EMOJIES,
  payload: isShowing,
});
export const sendMessage = (message: string) => ({
  type: EmojiPickerActionsTypes.SEND_NEW_MESSAGE,
  payload: message,
});
export const updateNewMessageBody = (body: string) => {
  return {
    type: EmojiPickerActionsTypes.UPDATE_NEW_MESSAGE_BODY,
    payload: body,
  };
};
export const addEmojiInRecent = (body: string) => ({
  type: EmojiPickerActionsTypes.ADD_EMOJI_IN_RECENT,
  payload: body,
});


