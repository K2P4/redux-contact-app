/** @format */

import React, { useEffect } from "react";
import { PreventComponent } from "../Components";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { getProfile } from "../service/auth.service";

const HomePage = () => {
	const nav = useNavigate();
	const routeData = useLocation();

	const handleAdd = () => {
		nav("/home/add");
	};

	const handleLogOut = () => {
		localStorage.removeItem("auth");
		nav("/");
	};

	useEffect(() => {
		(async () => {
			const res = await getProfile();
		})();
	}, []);

	return (
		<div>
			<PreventComponent fail={"/"} check={!localStorage.getItem("auth")}>
				<nav className="w-[80%] mx-auto ">
					<div className="flex justify-between px-2 py-3 ">
						<h1 onClick={() => nav("/home")} className="text-lg ">
							Contact App
						</h1>
						<div className="flex gap-4 ">
							<h1 onClick={handleAdd} className="text-lg ">
								Add
							</h1>
							<h1 onClick={handleLogOut} className="text-lg ">
								Log Out
							</h1>
						</div>
					</div>

					<Outlet />
				</nav>
			</PreventComponent>
		</div>
	);
};

export default HomePage;
