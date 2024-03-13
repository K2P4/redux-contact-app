/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	auth: false,
	data: null,
	loading: false,
	error: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		process: (state) => {
			state = { loading: true, ...state };
		},
		error: (state, action) => {
			state = { loading: false, error: action.payload, ...state };
		},
		login: (state, action) => {
			state = { auth: true, data: action.payload };
		},
		logout: (state) => {
			state = { auth: false, data: null };
		},
		default: store,
	},
});

export const authReducer = (store = initialState, action) => {
	switch (action.type) {
		case "process": {
			return (store = { loading: true, ...store });
		}
		case "error": {
			return (store = { loading: false, error: action.payload, ...store });
		}
		case "login": {
			return (store = { auth: true, data: action.payload });
		}
		case "logout": {
			return (store = { auth: false, data: null });
		}
		default:
			return store;
	}
};

export const { process, error, login, logout } = authSlice.actions;

export default authSlice.reducer;
