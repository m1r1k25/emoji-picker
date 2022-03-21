import { combineReducers } from "redux";
import emojiPicker from "./emojiPicker"

export const rootReducer = combineReducers({
  emojiState: emojiPicker
})

export type RootState = ReturnType<typeof rootReducer>