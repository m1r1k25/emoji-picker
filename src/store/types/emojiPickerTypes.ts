export enum EmojiPickerActionsTypes {
  SET_SHOWING_EMOJIES = "SET_SHOWING_EMOJIES",
  UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY",
  SEND_NEW_MESSAGE = "SEND_NEW_MESSAGE",
  ADD_EMOJI_IN_RECENT = "ADD_EMOJI_IN_RECENT"
}

interface IEmojies {
  title: string,
  items: string[]
}

export interface EmojiPickerState {
  emojies: IEmojies[];
  recentEmojies: string[];
  isShowEmojies: boolean;
  newMessageBody: string;
  messages: string[];
}

interface SetShowingEmojiesAction {
  type: EmojiPickerActionsTypes.SET_SHOWING_EMOJIES;
  payload: boolean;
}

interface UpdateNewMessageBodyAction {
  type: EmojiPickerActionsTypes.UPDATE_NEW_MESSAGE_BODY;
  payload: string;
}

interface SendNewMessageAction {
  type: EmojiPickerActionsTypes.SEND_NEW_MESSAGE;
  payload: string;
}

interface AddEmojiInRecentAction {
  type: EmojiPickerActionsTypes.ADD_EMOJI_IN_RECENT;
  payload: string;
}


export type EmojiPickerAction = SetShowingEmojiesAction | UpdateNewMessageBodyAction | SendNewMessageAction | AddEmojiInRecentAction

