import {
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../actions/register";
import { apiRequest } from "../actions/api";
const userRegister = ({ dispatch }) => (next) => (action) => {
  next(action);
  const URL = "user/";
  if (action.type === USER_REGISTER) {
    console.log("function register user start work ");

    dispatch(
      apiRequest(
        "POST",
        URL,
        action.payload,
        USER_REGISTER_SUCCESS,
        USER_REGISTER_FAIL
      )
    );
  }
};
const userRegisterSuccess = ({ dispatch }) => (next) => (action) => {
  next(action);
  if (action.type === USER_REGISTER_SUCCESS) {
    console.log(action.payload);

    // dispatch(redirectTo("login"));
  }
};
const userRegisterFail = ({ dispatch }) => (next) => (action) => {
  next(action);
  if (action.type === USER_REGISTER_FAIL) {
    console.log(action.payload);
    // dispatch(setMessage(action.payload));
  }
};
export const registerMdl = [
  userRegister,
  userRegisterSuccess,
  userRegisterFail,
];
