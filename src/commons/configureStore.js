import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducers } from "./configReducers";

export default function configureStore(initialState = {}) {
  return createStore(
    combineReducers(reducers),
    initialState,
    applyMiddleware(thunkMiddleware)
  );
}
