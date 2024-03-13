/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
	ButtonComponent,
	ErrorComponent,
	FormComponent,
	LoadingComponent,
} from "../Components";
import useApi from "../hook/useApi";
import { Register } from "../service/auth.service";

const RegisterPage = () => {
	const nav = useNavigate();

	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
		confirm_password: "",
	});

	const { apiFunction, data, loading, error } = useApi(Register);

	useEffect(() => {
		if (data) {
			nav("/");
		}
	}, [data]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		apiFunction(formData);
	};

	const handleInputChange = (e) => {
		setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
	};

	return (
		<div className="">
			{loading ? (
				<LoadingComponent />
			) : (
				<div className=" Center ">
					<h1 className="text-2xl font-bold ">Register Your Account</h1>

					<form className="" onSubmit={handleSubmit} action="">
						{error && <ErrorComponent error={error} />}
						<FormComponent
							onChange={handleInputChange}
							name={"username"}
							value={formData.username}
							type={"text"}
							label={"Enter Your Username "}
						/>

						<FormComponent
							onChange={handleInputChange}
							name={"email"}
							value={formData.email}
							type={"email"}
							label={"Enter Your Email "}
							placeholder="pty@gmail.com"
						/>

						<FormComponent
							name={"password"}
							onChange={handleInputChange}
							value={formData.password}
							type={"password"}
							label={"Enter Your password "}
						/>

						<FormComponent
							name={"confirm_password"}
							onChange={handleInputChange}
							value={formData.confirm_password}
							type={"password"}
							label={"Confirm Password "}
						/>

						<ButtonComponent
							type={"submit"}
							name={"Register"}
							label={"Register"}
						/>
					</form>
				</div>
			)}
		</div>
	);
};

export default RegisterPage;
