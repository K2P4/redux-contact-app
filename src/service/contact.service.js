/** @format */

import { Api } from "./Api";

export const ContactService = async () => {
	try {
		const res = await Api.get("/user");

		return res;
	} catch (e) {
		console.log(e);
	}
};

export const ContactAddService = async (formData) => {
	try {
		const res = await Api.post("/user", formData);

		return res;
	} catch (e) {
		return { error: true, msg: e.message };
	}
};

export const ContactDetailService = async (id) => {
	try {
		const res = await Api.get(`/user/${id}`);

		return res;
	} catch (e) {
		console.log(e);
	}
};

export const ContactEditService = async (id, formData) => {
	try {
		const res = await Api.put(`/user/${id}`, formData);
		console.log(res);
		if (res.data) {
			return true;
		}
	} catch (e) {
		throw new Error(e.message);
	}
};

export const ContactDeleteService = async (id) => {
	try {
		const res = await Api.delete(`/user/${id}`);
		console.log(res);
		if (res.data) {
			return true;
		}
	} catch (e) {
		throw new Error(e.message);
	}
};
