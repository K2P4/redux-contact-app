/** @format */

import { Api } from "./Api";

export const Register = async (data) => {
	try {
		const res = await Api.post("/user", data);
		return res;
	} catch (e) {
		return { error: true, msg: e.message };
	}
};

export const Login = async (arg, formData) => {
	try {
		const { data } = await Api.get(arg);

		const finder = data?.find((item) => item.email == formData.email);
		console.log(finder);

		if (!finder) {
			window.alert("Wrong email");
		}

		const finderPassword = finder.password == formData.password;

		if (!finderPassword) {
			window.alert("Password Incorrect");
		}
		return finder;
	} catch (e) {
		throw new Error(e.message);
	}
};

export const getProfile = async () => {
	try {
		const res = await Api.get("/user");
		return res;
	} catch (e) {
		console.log(e);
	}
};
