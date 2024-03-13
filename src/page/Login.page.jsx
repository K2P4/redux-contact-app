/** @format */

import React, { useEffect, useState } from "react";
import {
	ButtonComponent,
	ErrorComponent,
	FormComponent,
	LoadingComponent,
	PreventComponent,
} from "../Components";

import { useNavigate } from "react-router-dom";
import { Login } from "../service/auth.service";
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../store/action/auth.action";

const LoginPage = () => {
	const { loading, error, data, auth } = useSelector((store) => store.auth);
	const dispatch = useDispatch();

	const nav = useNavigate();

	const [formData, setFormData] = useState({ email: "", password: "" });

	const handleSubmit = async (e) => {
		e.preventDefault();
		const AuthData = await Login("user", formData);
		console.log(AuthData);
		if (AuthData) {
			localStorage.setItem("auth", JSON.stringify(AuthData));
			nav("/home", { state: { AuthData } });
		}

		loginAction(dispatch, formData);
	};

	useEffect(() => {
		const finder = localStorage.getItem("auth");

		if (finder) {
			nav("/home");
		}
	}, []);

	const handleInputChange = (e) => {
		setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
	};

	return (
		<PreventComponent fail={"/home"} check={localStorage.getItem("auth")}>
			<div className="">
				{loading ? (
					<LoadingComponent />
				) : (
					<div className=" Center ">
						<h1 className="text-2xl font-bold ">Log In Your Account</h1>

						<form className="" onSubmit={handleSubmit} action="">
							{error && <ErrorComponent error={error} />}
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

							<ButtonComponent
								type={"submit"}
								name={"login"}
								label={"LOG IN"}
							/>
						</form>

						<p className=" text-sm">
							You Don't Have Account Register{" "}
							<span
								onClick={() => nav("/register")}
								className=" active:scale-75  select-none underline text-blue-400 ">
								Register
							</span>
						</p>
					</div>
				)}
			</div>
		</PreventComponent>
	);
};

export default LoginPage;
