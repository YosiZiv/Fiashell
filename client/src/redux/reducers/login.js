import { FINISH_LOGIN, CLEAR_LOGIN } from "../actions/login";
const initState = {
  finishLogin: false,
};

export default function login(state = initState, action) {
  switch (action.type) {
    case FINISH_LOGIN: {
      return {
        ...state,
        finishLogin: action.payload,
      };
    }
    case CLEAR_LOGIN: {
      return {
        ...initState,
      };
    }
    default:
      return state;
  }
}
