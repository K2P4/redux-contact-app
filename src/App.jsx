/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import { ContactDetailPage, HomePage, LoginPage, RegisterPage } from "./page";
import { ContainerComponent } from "./Components";
import ContactAddPage from "./page/ContactAdd.page";
import ContactPage from "./page/Contact.page";

const App = () => {
	return (
		<div>
			<ContainerComponent>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/home" element={<HomePage />}>
						<Route index element={<ContactPage />} />
						<Route path="add" element={<ContactAddPage />} />
						<Route path="contact/:id" element={<ContactDetailPage />} />
					</Route>
				</Routes>
			</ContainerComponent>
		</div>
	);
};

export default App;
