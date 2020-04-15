import { combineReducers } from "redux";
import register from "./register";
import ui from "./ui";
import login from "./login";
export const reducers = combineReducers({
  register,
  ui,
  login,
});
