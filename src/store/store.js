/** @format */

import { thunk } from "redux-thunk";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { authReducer } from "./reducer/authReducer";

const reducer = combineReducers({
	auth: authReducer,
});

export const store = createStore(reducer, {}, applyMiddleware(thunk));
