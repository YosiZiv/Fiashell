import { LOGIN_INPUT_CHANGE } from "../actions/login";
import { checkValidity } from "../../utility";
const initState = {
  loginForm: {},
};

export default function login(state = initState, action) {
  switch (action.type) {
    case LOGIN_INPUT_CHANGE:
      const { id, value, validation } = action.payload;
      let error = checkValidity(id, value, validation);
      console.log(error);

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
