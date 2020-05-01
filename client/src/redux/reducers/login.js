import {
  LOGIN_INPUT_CHANGE,
  FINISH_LOGIN,
  CLEAR_LOGIN,
} from "../actions/login";
import { checkValidity } from "../../utility";
const initState = {
  loginForm: {},
  finishLogin: false,
};

export default function login(state = initState, action) {
  switch (action.type) {
    case LOGIN_INPUT_CHANGE:
      const { id, value, validation } = action.payload;
      let error = checkValidity(id, value, validation);
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          [id]: {
            value,
            error,
          },
        },
      };
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
// case SET_SEARCH_FIELDS:
//   return {
//     ...state,
//     searchForm: {
//       ...state.searchForm,
//       [action.payload.id]: {
//         value: action.payload.value,
//         isValid: checkValidity(
//           action.payload.value,
//           action.payload.validation,
//         ),
//       },
//     },
// case SET_USER:
//   return { ...state, user: action.payload };
// case SET_EMAILS:
//   return { ...state, emails: action.payload };
// case SEARCH_USER_AUTO_COMPLETE:
//   const autoCompleteResult = [];
//   if (state.emails.length) {
//     state.emails.forEach(email => {
//       if (email.includes(action.payload) && action.payload !== '') {
//         autoCompleteResult.push(email);
//       }
//     });
//   }
//   return { ...state, autoCompleteResult };
// case SWITCH_REGISTER_MODE:
//   return { ...state, mode: !state.mode };
