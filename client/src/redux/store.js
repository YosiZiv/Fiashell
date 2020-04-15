import { applyMiddleware, createStore, compose } from "redux";
import { reducers } from "./reducers";
import { api } from "./middlewares/api";
import { registerMdl } from "./middlewares/register";
import { loginMdl } from "./middlewares/login";
// dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(api, ...registerMdl, ...loginMdl))
);
