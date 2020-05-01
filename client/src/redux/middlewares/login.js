import { apiRequest } from "../actions/api";
import {
  checkExpiresIn,
  logout,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  CHECK_EXPIRES_IN,
  LOGOUT,
  finishLogin,
} from "../actions/login";
import { setMessage } from "../actions/ui";
const checkExpiresInMid = ({ dispatch }) => (next) => (action) => {
  if (action.type === CHECK_EXPIRES_IN) {
    if (action.payload.expiresIn) {
      const date = new Date();
      const setTime = action.payload.expiresIn - date;
      return setTimeout(() => {
        dispatch(logout());
      }, setTime);
    }
  }

  next(action);
};
const userLogin = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === USER_LOGIN) {
    const URL = "/session";
    dispatch(
      apiRequest(
        "POST",
        URL,
        action.payload,
        USER_LOGIN_SUCCESS,
        USER_LOGIN_FAIL
      )
    );
  }
};
const userLoginSuccess = ({ dispatch }) => (next) => (action) => {
  next(action);
  if (action.type === USER_LOGIN_SUCCESS) {
    const {
      payload: { expiresIn, token, user },
    } = action;
    const date = new Date();
    date.setDate(date.getDate() + expiresIn);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("expiresIn", date);
    dispatch(checkExpiresIn({ expiresIn }));
    return dispatch(finishLogin(true));
  }
};
const userLoginFail = ({ dispatch }) => (next) => (action) => {
  next(action);
  if (action.type === USER_LOGIN_FAIL) {
    return dispatch(setMessage(action.payload));
  }
};
const userLogout = ({ dispatch }) => (next) => (action) => {
  if (action.type === LOGOUT) {
    localStorage.removeItem("token");
    localStorage.removeItem("expiresIn");
  }
  next(action);
};

export const loginMdl = [
  userLogin,
  userLoginSuccess,
  userLoginFail,
  userLogout,
  checkExpiresInMid,
];
