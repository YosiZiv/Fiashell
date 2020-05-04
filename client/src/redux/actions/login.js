export const USER_LOGIN = "[login] user login Start";
export const USER_LOGIN_SUCCESS = "[login] user login Success";
export const USER_LOGIN_FAIL = "[login] user login Fail";
export const FINISH_LOGIN = "[login] finish login";
export const CLEAR_LOGIN = "[login] clear login";
export const CHECK_EXPIRES_IN = "[login] check expires in";
export const LOGOUT = "[login] logout";

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});
export const finishLogin = (payload) => ({
  type: FINISH_LOGIN,
  payload,
});
export const clearLogin = () => ({
  type: CLEAR_LOGIN,
});
export const checkExpiresIn = (payload) => ({
  type: CHECK_EXPIRES_IN,
  payload,
});
export const logout = () => ({
  type: LOGOUT,
});
