export const LOADING_START = "[UI] Loading Start";
export const LOADING_FINISH = "[UI] Loading Finish";

export const loadingStart = () => ({
  type: LOADING_START,
});
export const loadingFinish = () => ({
  type: LOADING_FINISH,
});
