import {
  LOADING_START,
  LOADING_FINISH,
  SET_MESSAGE,
  DELETE_MESSAGE,
  CLEAR_UI,
  REDIRECT,
} from "../actions/ui";
const initState = {
  loading: false,
  message: {},
  redirect: null,
};

export default function ui(state = initState, action) {
  switch (action.type) {
    case LOADING_START:
      return { ...state, loading: true };
    case LOADING_FINISH:
      return { ...state, loading: false };
    case SET_MESSAGE:
      return { ...state, message: action.payload };
    case REDIRECT: {
      return {
        ...state,
        redirect: action.payload,
      };
    }
    case DELETE_MESSAGE: {
      const message = state.message;
      delete message[action.payload];
      return { ...state, message };
    }
    case CLEAR_UI: {
      return {
        ...initState,
      };
    }
    default:
      return state;
  }
}
