import { storeStateType } from "./reducer";
export const GET_DETAIL = "GET_DETAIL";
export type GET_DETAIL = typeof GET_DETAIL;
export interface actionType {
  type: GET_DETAIL;
  payload: storeStateType;
}
export const getDetail = (payload: storeStateType): actionType => ({
  type: GET_DETAIL,
  payload,
});
