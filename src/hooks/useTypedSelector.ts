import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/emojiPicker"

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector