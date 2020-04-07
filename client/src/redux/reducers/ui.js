import { LOADING_START, LOADING_FINISH } from "../actions/ui";
const initState = {
  loading: false,
};

export default function ui(state = initState, action) {
  switch (action.type) {
    case LOADING_START:
      return { ...state, loading: true };
    case LOADING_FINISH:
      return { ...state, loading: false };
    default:
      return state;
  }
}
