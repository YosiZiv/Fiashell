export const SET_INPUT = "[register] Set Input Fields";
export const USER_REGISTER = "[register] USER Register Start";
export const USER_REGISTER_SUCCESS = "[register] USER Register Success";
export const USER_REGISTER_FAIL = "[register] USER Register Fail";

export const inputChange = (payload) => ({
  type: SET_INPUT,
  payload,
});

export const userRegister = (payload) => ({
  type: USER_REGISTER,
  payload,
});
