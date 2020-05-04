import { FINISH_REGISTER, CLEAR_REGISTER } from "../actions/register";
import { checkValidity } from "../../utility";
const initState = {
  finishRegister: false,
};

export default function register(state = initState, action) {
  switch (action.type) {
    case FINISH_REGISTER: {
      return {
        ...state,
        finishRegister: action.payload,
      };
    }
    case CLEAR_REGISTER: {
      return {
        ...initState,
      };
    }
    default:
      return state;
  }
}
