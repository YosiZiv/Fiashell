import { apiRequest } from "../actions/api";
import {
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  finishRegister,
} from "../actions/register";
import { setMessage } from "../actions/ui";
const userRegister = ({ dispatch }) => (next) => (action) => {
  next(action);
  const URL = "/user";
  if (action.type === USER_REGISTER) {
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
    dispatch(finishRegister(true));
  }
};
const userRegisterFail = ({ dispatch }) => (next) => (action) => {
  next(action);
  if (action.type === USER_REGISTER_FAIL) {
    dispatch(setMessage(action.payload));
  }
};
export const registerMdl = [
  userRegister,
  userRegisterSuccess,
  userRegisterFail,
];
