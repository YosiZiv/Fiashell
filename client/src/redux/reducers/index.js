import { combineReducers } from "redux";
import register from "./register";
import ui from "./ui";
export const reducers = combineReducers({
  register,
  ui,
});
