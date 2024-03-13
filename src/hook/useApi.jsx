/** @format */

import React, { useState } from "react";

const useApi = (fun, arg) => {
	const [apiData, setApiData] = useState({
		loading: false,
		data: null,
		error: null,
	});

	const apiFunction = async (formData) => {
		setApiData((pre) => ({ ...pre, loading: true }));
		const res = await fun(formData);

		if (res.error) {
			setApiData((pre) => ({ ...pre, loading: false, error: res.msg }));
		} else {
			setApiData((pre) => ({ ...pre, loading: false, data: res.data }));
		}
	};

	const loginApi = async () => {
		try {
			const data = await fun(arg);
			setTimeout(() => {
				setApiData((pre) => {
					return {
						error: null,
						loading: false,
						data: data,
					};
				});
			}, 2000);
		} catch (e) {
			setApiData((pre) => {
				return {
					error: e.message,
					loading: false,
					data: null,
				};
			});
		}
	};

	const { data, loading, error } = apiData;

	return { apiFunction, loginApi, data, loading, error };
};

export default useApi;
