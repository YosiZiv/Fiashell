export const LOADING_START = "[UI] Loading Start";
export const LOADING_FINISH = "[UI] Loading Finish";
export const SET_MESSAGE = "[UI] Message";
export const DELETE_MESSAGE = "[UI] Delete Message";
export const loadingStart = () => ({
  type: LOADING_START,
});
export const loadingFinish = () => ({
  type: LOADING_FINISH,
});
export const setMessage = (payload) => ({
  type: SET_MESSAGE,
  payload,
});
export const deleteMessage = (payload) => ({
  type: DELETE_MESSAGE,
  payload,
});
