export const USER_REGISTER = "[register] USER Register Start";
export const USER_REGISTER_SUCCESS = "[register] USER Register Success";
export const USER_REGISTER_FAIL = "[register] USER Register Fail";
export const FINISH_REGISTER = "[register] finish register";
export const CLEAR_REGISTER = "[register] clear register";

export const userRegister = (payload) => ({
  type: USER_REGISTER,
  payload,
});
export const clearRegister = () => ({
  type: CLEAR_REGISTER,
});
export const finishRegister = (payload) => ({
  type: FINISH_REGISTER,
  payload,
});
