import {
  combineReducers, createStore, applyMiddleware, compose,
} from "redux";
import thunk from "redux-thunk";
import * as allReducers from "./reducers";
import API from "../api/API";

const api = new API();

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk.withExtraArgument(api)),
);

const store = createStore(
  combineReducers(allReducers),
  enhancer,
);

export default store;
