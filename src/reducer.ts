import { GET_DETAIL, actionType } from "./action";
import { combineReducers } from "redux";
export interface storeStateType {
  kind?: string;
  _uid?: string;
  date?: string;
  image?: string;
  content?: string;
  ig_handle?: string;
  variants?: string;
}
const initialState: storeStateType = {};
export function getDetail(
  state = initialState,
  action: actionType
): storeStateType {
  const { type, payload } = action;
  switch (type) {
    case GET_DETAIL:
      return { ...state, ...payload };
    default:
      return state;
  }
}
export const rootReducer = combineReducers({
  detail: getDetail,
});
export type RootState = ReturnType<typeof rootReducer>;
