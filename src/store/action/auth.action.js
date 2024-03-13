/** @format */

import { Login } from "../../service/auth.service";

export const loginAction = async (dispatch, payload) => {
	try {
		dispatch({ type: "process" });

		const res = await Login(payload);
		console.log(res);

		if (res.data) {
			dispatch({ type: "login", payload: res.data });
		} else {
			dispatch({ type: "error", payload: res.msg });
		}
	} catch (e) {
		dispatch({ type: "error", payload: e.message });
	}
};
